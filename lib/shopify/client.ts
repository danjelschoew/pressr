import type { ShopifyProductResponse } from "./types";
import { PRODUCT_BY_HANDLE_QUERY } from "./queries";

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `Missing environment variable: ${key}\n` +
        `Add it to .env.local — see .env.local.example for the full list.`
    );
  }
  return value;
}

function formatStoreDomain(raw: string): string {
  // Accept "mystore", "mystore.myshopify.com", or "https://mystore.myshopify.com"
  return raw
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "")
    .replace(/\.myshopify\.com$/, "") + ".myshopify.com";
}

async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<T> {
  const domain = formatStoreDomain(getEnv("SHOPIFY_STORE_DOMAIN"));
  const token = getEnv("SHOPIFY_STOREFRONT_ACCESS_TOKEN");
  const endpoint = `https://${domain}/api/2024-10/graphql.json`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    // Cache product data for 60 seconds on the server.
    // Change to { cache: "no-store" } if you need real-time inventory.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(
      `Shopify Storefront API returned ${res.status} ${res.statusText} for ${endpoint}`
    );
  }

  const json = (await res.json()) as T;
  return json;
}

export async function fetchProductByHandle(
  handle: string
): Promise<ShopifyProductResponse> {
  return shopifyFetch<ShopifyProductResponse>(PRODUCT_BY_HANDLE_QUERY, {
    handle,
  });
}
