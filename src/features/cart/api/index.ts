import type { CartType } from "../types";
import type { ApiSuccessResponse } from "@/types";

import { axiosInstance } from "@/lib/axios";

export const getCart = () => {
  return axiosInstance.get<CartType>("/user/cart").then((res) => res.data);
};

export const addToCart = (productId: number, variantId: number, quantity: number) => {
  return axiosInstance
    .post<ApiSuccessResponse>("/user/cart", {
      product_id: productId,
      variant_id: variantId,
      quantity,
    })
    .then((res) => res.data);
};

export const removeFromCart = (variables: { cartItemId: number; quantity: number }) => {
  return axiosInstance
    .delete<ApiSuccessResponse>(`/user/cart/${variables.cartItemId}`, {
      data: { quantity: variables.quantity },
    })
    .then((res) => res.data);
};
