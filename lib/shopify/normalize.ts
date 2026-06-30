import type { ShopifyProduct, ShopifyMoneyV2 } from "./types";
import type { Product, ProductVariant, ProductIngredient } from "@/types/product";

// Shopify variant IDs are base64-encoded global IDs:
// "gid://shopify/ProductVariant/123456" → "123456"
function decodeVariantId(gid: string): string {
  try {
    const decoded = Buffer.from(gid, "base64").toString("utf-8");
    const parts = decoded.split("/");
    return parts[parts.length - 1];
  } catch {
    // If already a numeric string, return as-is
    return gid.replace(/\D/g, "");
  }
}

function formatMoney(money: ShopifyMoneyV2): string {
  const amount = parseFloat(money.amount);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode,
    minimumFractionDigits: 2,
  }).format(amount);
}

// Parses the ingredients metafield.
// Supports both plain JSON list and newline-separated text.
function parseIngredients(
  metafield: { value: string; type: string } | null
): ProductIngredient[] {
  if (!metafield) return fallbackIngredients;

  try {
    if (metafield.type === "list.single_line_text_field") {
      const parsed = JSON.parse(metafield.value) as string[];
      return parsed.map((name) => ({ name: name.trim() }));
    }
    // Plain text fallback: one ingredient per line
    return metafield.value
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((name) => ({ name }));
  } catch {
    return fallbackIngredients;
  }
}

// Used when no ingredients metafield is set on the Shopify product.
const fallbackIngredients: ProductIngredient[] = [
  { name: "Ashwagandha" },
  { name: "Vitamin D" },
  { name: "Vitamin B12" },
  { name: "Natural Flavours" },
];

export function normalizeProduct(shopifyProduct: ShopifyProduct): Product {
  const variants: ProductVariant[] = shopifyProduct.variants.edges.map(
    ({ node }) => ({
      id: node.id,
      title: node.title,
      price: formatMoney(node.price),
      available: node.availableForSale,
    })
  );

  const firstVariant = shopifyProduct.variants.edges[0]?.node;
  const firstImage = shopifyProduct.images.edges[0]?.node ?? null;

  // Build a standard Shopify cart URL from the numeric variant ID.
  // This works for all Shopify stores without requiring a checkout API call.
  const numericVariantId = firstVariant
    ? decodeVariantId(firstVariant.id)
    : null;
  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN ?? "";
  const checkoutUrl = numericVariantId
    ? `https://${storeDomain}/cart/${numericVariantId}:1`
    : shopifyProduct.onlineStoreUrl ?? "#";

  const minPrice = shopifyProduct.priceRange.minVariantPrice;
  const compareAtMin =
    shopifyProduct.compareAtPriceRange.minVariantPrice;
  const hasCompare =
    parseFloat(compareAtMin.amount) > parseFloat(minPrice.amount);

  return {
    id: shopifyProduct.id,
    title: shopifyProduct.title,
    description: shopifyProduct.description,
    shortDescription:
      shopifyProduct.shortDescription?.value ?? "Your pre-match ritual. In a gummy.",
    price: formatMoney(minPrice),
    compareAtPrice: hasCompare ? formatMoney(compareAtMin) : undefined,
    ingredients: parseIngredients(shopifyProduct.ingredients),
    imageUrl: firstImage?.url ?? null,
    imageAlt: firstImage?.altText ?? shopifyProduct.title,
    checkoutUrl,
    available: shopifyProduct.availableForSale,
    variants,
    badge: shopifyProduct.badge?.value ?? "Matchday Edition",
  };
}
