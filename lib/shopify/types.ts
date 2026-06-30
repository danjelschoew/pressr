// Raw shapes returned by the Shopify Storefront API GraphQL responses.
// These are NOT the same as our internal Product type in /types/product.ts.

export interface ShopifyMoneyV2 {
  amount: string;
  currencyCode: string;
}

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number | null;
  height: number | null;
}

export interface ShopifyProductVariant {
  id: string; // gid://shopify/ProductVariant/123
  title: string;
  price: ShopifyMoneyV2;
  compareAtPrice: ShopifyMoneyV2 | null;
  availableForSale: boolean;
  quantityAvailable: number | null;
}

export interface ShopifyMetafield {
  value: string;
  type: string;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  descriptionHtml: string;
  handle: string;
  availableForSale: boolean;
  onlineStoreUrl: string | null;
  priceRange: {
    minVariantPrice: ShopifyMoneyV2;
    maxVariantPrice: ShopifyMoneyV2;
  };
  compareAtPriceRange: {
    minVariantPrice: ShopifyMoneyV2;
  };
  images: {
    edges: Array<{ node: ShopifyImage }>;
  };
  variants: {
    edges: Array<{ node: ShopifyProductVariant }>;
  };
  // Optional metafield: custom.ingredients (list.single_line_text_field)
  ingredients: ShopifyMetafield | null;
  // Optional metafield: custom.short_description (single_line_text_field)
  shortDescription: ShopifyMetafield | null;
  // Optional metafield: custom.badge (single_line_text_field)
  badge: ShopifyMetafield | null;
}

export interface ShopifyProductResponse {
  data: {
    product: ShopifyProduct | null;
  };
  errors?: Array<{ message: string }>;
}
