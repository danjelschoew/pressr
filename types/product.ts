export interface ProductIngredient {
  name: string;
  amount?: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: string;
  available: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  price: string;
  compareAtPrice?: string;
  ingredients: ProductIngredient[];
  imageUrl: string | null;
  imageAlt?: string;
  checkoutUrl: string;
  available: boolean;
  variants: ProductVariant[];
  badge?: string;
}
