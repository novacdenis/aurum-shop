import { useQuery } from "@tanstack/react-query";

import { Pagination } from "@/components/Elements";
import { ProductPreview, ProductPreviewList, getAllProducts } from "@/features/product";

import { useShopQueryState } from "../hooks";

export const Products: React.FC = () => {
  const { query, setShopQueryState } = useShopQueryState();

  const { data: products, isLoading: areProductsLoading } = useQuery(["products", query], () =>
    getAllProducts(query)
  );

  return (
    <>
      <ProductPreviewList loading={areProductsLoading}>
        {products?.data
          .filter((product) => Array.isArray(product.uploaded_images)) // TODO: remove this filter when the API is fixed
          .map((product) => (
            <ProductPreview key={product.id} product={product} />
          ))}
      </ProductPreviewList>
      <Pagination
        className="mt-14 lg:mt-28"
        onChange={(page) => setShopQueryState({ page })}
        disabled={areProductsLoading}
        pageSize={9}
        total={products?.total}
        current={products?.current_page}
      />
    </>
  );
};
