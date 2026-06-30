// Server-side only. Never import this file from a client component.
// The Storefront access token lives exclusively in process.env and is never
// sent to the browser — clients call /api/checkout which proxies through here.

function getEndpoint(): { url: string; token: string } {
  const raw = process.env.SHOPIFY_STORE_DOMAIN ?? "";
  const domain =
    raw
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "")
      .replace(/\.myshopify\.com$/, "") + ".myshopify.com";

  return {
    url: `https://${domain}/api/2024-10/graphql.json`,
    token: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "",
  };
}

async function storefrontFetch<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<T> {
  const { url, token } = getEndpoint();

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Shopify ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as { data: T; errors?: { message: string }[] };

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join(", "));
  }

  return json.data;
}

// ─── Get first available variant for a product handle ─────────────────────────

const PRODUCT_QUERY = `
  query GetProduct($handle: String!) {
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

interface ProductData {
  product: {
    variants: {
      edges: { node: { id: string; availableForSale: boolean } }[];
    };
  } | null;
}

export async function getProductByHandle(
  handle: string
): Promise<{ variantId: string }> {
  const data = await storefrontFetch<ProductData>(PRODUCT_QUERY, { handle });

  const variant = data.product?.variants.edges[0]?.node;

  if (!variant) {
    throw new Error(
      `No variant found for product handle "${handle}". ` +
        `Check SHOPIFY_PRODUCT_HANDLE in your environment variables.`
    );
  }

  if (!variant.availableForSale) {
    throw new Error("This product is currently out of stock.");
  }

  return { variantId: variant.id };
}

// ─── Create a Shopify cart and return the checkout URL ────────────────────────

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

interface CartCreateData {
  cartCreate: {
    cart: { checkoutUrl: string } | null;
    userErrors: { message: string }[];
  };
}

export async function createCart(variantId: string): Promise<string> {
  const data = await storefrontFetch<CartCreateData>(CART_CREATE_MUTATION, {
    variantId,
  });

  if (data.cartCreate.userErrors.length) {
    throw new Error(
      data.cartCreate.userErrors.map((e) => e.message).join(", ")
    );
  }

  const checkoutUrl = data.cartCreate.cart?.checkoutUrl;

  if (!checkoutUrl) {
    throw new Error("Shopify did not return a checkout URL.");
  }

  return checkoutUrl;
}
