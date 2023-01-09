import type { ProductImageType, ProductVariantType } from "@/features/product";

export interface CartProductType {
  id: number;
  name_ru: string;
  name_ro: string;
  category_id: number;
  uploaded_images: ProductImageType[];
}

export interface CartItemType {
  id: number;
  quantity: number;
  product: CartProductType;
  variant: ProductVariantType;
}

export interface CartType {
  cartItems: CartItemType[];
  totalPrice: number;
}
