import { fetchProductByHandle } from "./client";
import { normalizeProduct } from "./normalize";
import type { Product } from "@/types/product";

export async function getProduct(handle: string): Promise<Product> {
  const response = await fetchProductByHandle(handle);

  if (response.errors?.length) {
    const messages = response.errors.map((e) => e.message).join(", ");
    throw new Error(`Shopify Storefront API errors: ${messages}`);
  }

  if (!response.data.product) {
    throw new Error(
      `Product not found: "${handle}". ` +
        `Check that SHOPIFY_PRODUCT_HANDLE in .env.local matches a published product handle in your Shopify store.`
    );
  }

  return normalizeProduct(response.data.product);
}
