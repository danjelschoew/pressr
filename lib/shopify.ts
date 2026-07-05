// Server-side only. Never import this file from a client component.
// The Storefront access token lives exclusively in process.env and is never
// sent to the browser — clients call /api/checkout which proxies through here.

import type { Product } from "@/types/product";

function getEndpoint(): { url: string; token: string } {
  const raw = process.env.SHOPIFY_API_DOMAIN ?? process.env.SHOPIFY_STORE_DOMAIN ?? "";
  const domain = raw
    .replace(/^https?:\/\//, "")
    .replace(/\/admin\/?$/, "")
    .replace(/\/$/, "");

  if (!domain) {
    throw new Error(
      "Shopify domain is not configured. Set SHOPIFY_API_DOMAIN in your environment variables."
    );
  }

  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "";
  if (!token) {
    throw new Error(
      "Shopify Storefront token is not configured. Set SHOPIFY_STOREFRONT_ACCESS_TOKEN in your environment variables."
    );
  }

  return {
    url: `https://${domain}/api/2024-10/graphql.json`,
    token,
  };
}

async function storefrontFetch<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<T> {
  const { url, token } = getEndpoint();

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`Network error reaching Shopify: ${msg}`);
  }

  if (!res.ok) {
    let body = "";
    try { body = await res.text(); } catch { /* ignore */ }
    // Log full detail server-side only; callers receive a generic message.
    console.error(`[shopify] ${res.status} ${res.statusText}`, body.slice(0, 300));
    throw new Error(`Shopify returned ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as { data: T; errors?: { message: string }[] };

  if (json.errors?.length) {
    console.error("[shopify] GraphQL errors:", json.errors);
    throw new Error("Shopify request failed.");
  }

  return json.data;
}

// ─── Single query: fetch product + first variant + create cart ────────────────
// Combines the former getProductByHandle + createCart two-step into one export.

const CHECKOUT_QUERY = `
  query GetProductForCheckout($handle: String!) {
    product(handle: $handle) {
      variants(first: 1) {
        edges {
          node {
            id
            availableForSale
          }
        }
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  mutation CartCreate($variantId: ID!) {
    cartCreate(input: {
      lines: [{ merchandiseId: $variantId, quantity: 1 }]
    }) {
      cart {
        checkoutUrl
      }
      userErrors {
        message
      }
    }
  }
`;

interface CheckoutQueryData {
  product: {
    variants: {
      edges: { node: { id: string; availableForSale: boolean } }[];
    };
  } | null;
}

interface CartCreateData {
  cartCreate: {
    cart: { checkoutUrl: string } | null;
    userErrors: { message: string }[];
  };
}

export async function createCheckout(handle: string): Promise<string> {
  const productData = await storefrontFetch<CheckoutQueryData>(CHECKOUT_QUERY, { handle });

  const variant = productData.product?.variants.edges[0]?.node;
  if (!variant) {
    throw new Error(`No variant found for product "${handle}".`);
  }
  if (!variant.availableForSale) {
    throw new Error("This product is currently out of stock.");
  }

  const cartData = await storefrontFetch<CartCreateData>(CART_CREATE_MUTATION, {
    variantId: variant.id,
  });

  if (cartData.cartCreate.userErrors.length) {
    throw new Error(cartData.cartCreate.userErrors.map((e) => e.message).join(", "));
  }

  const checkoutUrl = cartData.cartCreate.cart?.checkoutUrl;
  if (!checkoutUrl) {
    throw new Error("Shopify did not return a checkout URL.");
  }

  return checkoutUrl;
}

// ─── Full product data for page rendering ─────────────────────────────────────

const FULL_PRODUCT_QUERY = `
  query GetFullProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      featuredImage {
        url
        altText
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

interface FullProductData {
  product: {
    id: string;
    title: string;
    description: string;
    featuredImage: { url: string; altText: string | null } | null;
    variants: {
      edges: {
        node: {
          id: string;
          title: string;
          availableForSale: boolean;
          price: { amount: string; currencyCode: string };
          compareAtPrice: { amount: string; currencyCode: string } | null;
        };
      }[];
    };
  } | null;
}

function formatPrice(amount: string, currencyCode: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
  }).format(parseFloat(amount));
}

export async function getShopifyProduct(handle: string): Promise<Product> {
  const data = await storefrontFetch<FullProductData>(FULL_PRODUCT_QUERY, { handle });

  const p = data.product;
  if (!p) {
    throw new Error(`Product not found for handle "${handle}".`);
  }

  const variants = p.variants.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    price: formatPrice(node.price.amount, node.price.currencyCode),
    available: node.availableForSale,
  }));

  const firstVariant = p.variants.edges[0]?.node;

  return {
    id: p.id,
    title: p.title,
    description: p.description,
    shortDescription: "Part of the preparation. Not a shortcut.",
    price: firstVariant
      ? formatPrice(firstVariant.price.amount, firstVariant.price.currencyCode)
      : "—",
    compareAtPrice:
      firstVariant?.compareAtPrice
        ? formatPrice(
            firstVariant.compareAtPrice.amount,
            firstVariant.compareAtPrice.currencyCode
          )
        : undefined,
    ingredients: [
      { name: "Ashwagandha" },
      { name: "Vitamin D" },
      { name: "Vitamin B12" },
      { name: "Natural Flavours" },
    ],
    imageUrl: p.featuredImage?.url ?? null,
    imageAlt: p.featuredImage?.altText ?? p.title,
    checkoutUrl: "/api/checkout",
    available: variants.some((v) => v.available),
    variants,
    badge: "Football Performance",
  };
}
