import type { ProductType } from "../types";

import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Section, SectionHeader, SectionParagraph, SectionTitle } from "@/components/Elements";
import { useCurrentLocale } from "@/hooks";

import { getProduct } from "../api";
import { ProductView } from "../components";

export interface ProductContainerProps {
  initialProductData?: ProductType;
}

const ProductContainer: React.FC<ProductContainerProps> = ({ initialProductData }) => {
  const { t } = useTranslation();
  const { query } = useRouter();
  const { locale } = useCurrentLocale();

  const { data: product } = useQuery(
    ["product", locale, query.slug as string],
    () => getProduct(locale, query.slug as string),
    {
      enabled: Boolean(query.slug),
      initialData: initialProductData,
    }
  );

  return (
    <>
      <ProductView data={product} />
      <Section>
        <SectionHeader align="center">
          <SectionTitle>{t("information")}</SectionTitle>
        </SectionHeader>
        <div className="mx-auto max-w-screen-lg text-center">
          <SectionParagraph className="max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum venenatis dolor, ut
            fringilla nisi cursus quis. Nulla aliquam porta urna, a porta ipsum tincidunt a.
          </SectionParagraph>
          <SectionParagraph className="max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et elementum nisl. Duis
            tortor ante, blandit ut tellus cursus, pellentesque scelerisque odio. Aliquam erat
            volutpat. Aliquam malesuada bibendum tortor dictum tincidunt. Pellentesque blandit enim
            facilisis urna rutrum aliquam. Nulla facilisi. Etiam interdum rhoncus risus, id
            consequat urna aliquet id. Ut vel nunc accumsan, malesuada massa a, suscipit risus.
            Praesent eget elementum ipsum. Quisque eu mollis augue. Maecenas eleifend elit quam, in
            aliquet nibh cursus quis. Ut mauris odio, pulvinar nec nibh at, dictum pharetra neque.
            Mauris gravida lectus lectus, sed volutpat odio dictum ut.
          </SectionParagraph>
        </div>
      </Section>
      <Section>
        <SectionHeader align="center">
          <SectionTitle>{t("similar_products")}</SectionTitle>
        </SectionHeader>
        {/* <ProductPreviewList loading={arePopularProductsLoading}>
      {popularProducts?.data
        .filter((product) => Array.isArray(product.uploaded_images)) // TODO: remove this filter when the API is fixed
        .map((product) => (
          <ProductPreview key={product.id} product={product} />
        ))}
    </ProductPreviewList> */}
      </Section>
    </>
  );
};

export default ProductContainer;
