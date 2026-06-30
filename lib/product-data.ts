import type { Product } from "@/types/product";

// Static fallback used when Shopify env vars are not configured.
// The page renders correctly with this data so you can preview the design
// before connecting a store.
export const fallbackProduct: Product = {
  id: "pressr-match-routine-gummies",
  title: "PRESSR Match Routine Gummies",
  description:
    "Ashwagandha gummies designed to become part of your pre-match routine.",
  shortDescription: "Your pre-match ritual. In a gummy.",
  price: "$34.95",
  compareAtPrice: undefined,
  ingredients: [
    { name: "Ashwagandha" },
    { name: "Vitamin D" },
    { name: "Vitamin B12" },
    { name: "Natural Flavours" },
  ],
  imageUrl: null,
  imageAlt: "PRESSR Match Routine Gummies",
  checkoutUrl: process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL ?? "#checkout",
  available: true,
  variants: [
    {
      id: "default",
      title: "30 Gummies",
      price: "$34.95",
      available: true,
    },
  ],
  badge: "Matchday Edition",
};
