import type { ProductPreviewType, GetAllProductsQuery, ProductType } from "../types";
import type { Pagination } from "@/types";

import { axiosInstance } from "@/lib/axios";

export const getAllProducts = (params: GetAllProductsQuery) => {
  return axiosInstance
    .get<Pagination<ProductPreviewType[]>>("/products", { params })
    .then((res) => res.data);
};

export const getProduct = (locale: string, slug: string) => {
  return axiosInstance.get<ProductType>(`/${locale}/${slug}`).then((res) => res.data);
};

export const getProductUpsell = (productId: number) => {
  return []; // TODO: implement
};
