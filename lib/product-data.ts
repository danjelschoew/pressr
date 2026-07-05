import type { Product } from "@/types/product";

const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "#";

export const fallbackProduct: Product = {
  id: "pressr-matchday",
  title: "PRESSR MATCHDAY",
  description:
    "Ashwagandha capsules designed to fit into your matchday preparation.",
  shortDescription: "Part of the preparation. Not a shortcut.",
  price: "$34.95",
  compareAtPrice: undefined,
  ingredients: [
    { name: "Ashwagandha" },
    { name: "Vitamin D" },
    { name: "Vitamin B12" },
    { name: "Natural Flavours" },
  ],
  imageUrl: null,
  imageAlt: "PRESSR MATCHDAY",
  checkoutUrl,
  available: true,
  variants: [{ id: "default", title: "30 Capsules", price: "$34.95", available: true }],
  badge: "Football Performance",
};
