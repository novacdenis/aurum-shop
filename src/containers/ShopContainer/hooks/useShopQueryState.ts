import type { GetAllProductsQuery } from "@/features/product";
import type { SortType } from "@/types";

import { useRouter } from "next/router";
import { useCallback } from "react";

export const useShopQueryState = () => {
  const router = useRouter();

  const setShopQueryState = useCallback(
    (query: GetAllProductsQuery) => {
      const searchParams = new URLSearchParams();

      Object.entries(query).forEach(([key, value]) => {
        if (value) {
          searchParams.set(key, value.toString());
        }
      });

      router.push(router.pathname + "?" + searchParams.toString(), undefined, { shallow: true });
    },
    [router]
  );

  return {
    query: {
      q: (router.query.q as string) || undefined,
      page: Number(router.query.page) || 1,
      per_page: Number(router.query.per_page) || 9,
      sort_by: (router.query.sort as string) || "id",
      sort_direction: (router.query.sort_direction as SortType) || "asc",
    },
    setShopQueryState,
  };
};
