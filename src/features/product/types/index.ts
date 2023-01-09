import type { PaginationQuery } from "@/types";

export interface GetAllProductsQuery extends PaginationQuery {
  q?: string | null;
}

export interface ProductImageType {
  id: number | null;
  is_main: boolean;
  url: string;
}

export interface ProductPreviewType {
  id: number;
  slug_ru: string;
  slug_ro: string;
  name_ru: string;
  name_ro: string;
  min_price: string | number;
  max_price: string | number;
  uploaded_images: ProductImageType[];
}

export interface ProductAttributeType {
  attribute_id: number;
  attribute_values_ids: number[];
  attribute_values_options: { value: number; label: string }[];
}

export interface ProductVariantAttributeType {
  id: number;
  product_id: number;
  attribute_id: number;
  attribute_value_id: number;
  variant_id: number;
}

export interface ProductVariantType {
  id: number;
  name: string;
  product_id: number;
  price: number;
  stock: number;
  sku: string;
  attributes: ProductVariantAttributeType[];
  attributes_uid?: string;
}

export interface ProductType {
  id: number;
  category_id: number;
  manufacturer_id: number;
  has_discount: boolean;
  has_badge: boolean;
  status: number;
  attributes: ProductAttributeType[];
  variants: ProductVariantType[];
  min_price: number;
  max_price: number;
  uploaded_images: ProductImageType[];
  name: string;
  description: string;
  out_of_stock_text: string;
  meta_title: string;
  meta_description: string;
  alternate_url: string;
}
