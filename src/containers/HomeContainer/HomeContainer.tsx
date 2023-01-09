import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

import {
  Banner,
  BannerParagraph,
  BannerTitle,
  CircleButton,
  Section,
  SectionButton,
  SectionHeader,
  SectionParagraph,
  SectionSubtitle,
  SectionTitle,
} from "@/components/Elements";
import { getAllProducts, ProductPreview, ProductPreviewList } from "@/features/product";

import { Categories, SliderFallback } from "./parts";

const Slider = dynamic(() => import("./parts").then((mod) => mod.Slider), {
  ssr: false,
  loading: () => <SliderFallback />,
});

const HomeContainer: React.FC = () => {
  const { t } = useTranslation();

  const { data: popularProducts, isLoading: arePopularProductsLoading } = useQuery(
    ["products", { page: 1, per_page: 4, sort_by: "id", sort_direction: "desc" }],
    () => getAllProducts({ page: 1, per_page: 8, sort_by: "views", sort_direction: "desc" })
  );

  const { data: newProducts, isLoading: areNewProductsLoading } = useQuery(
    ["products", { page: 1, per_page: 4, sort_by: "id", sort_direction: "desc" }],
    () => getAllProducts({ page: 1, per_page: 4, sort_by: "id", sort_direction: "desc" })
  );

  return (
    <>
      <Slider />

      <Section>
        <SectionHeader align="center">
          <SectionSubtitle>{t("welcome")}</SectionSubtitle>
          <SectionTitle>
            Lorem ipsum <br />
            dolor sit amet, consectetur elit <br /> {t("about_us")}
          </SectionTitle>
        </SectionHeader>
        <SectionParagraph className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum venenatis dolor, ut
          fringilla nisi cursus quis. Nulla aliquam porta urna, a porta ipsum tincidunt a.
        </SectionParagraph>
        <SectionParagraph className="text-center">
          Fusce molestie erat eget leo facilisis, eu elementum erat aliquet. Etiam ornare, felis.
        </SectionParagraph>
      </Section>

      <Categories />

      <Section>
        <SectionHeader>
          <SectionSubtitle>{t("popular_products")}</SectionSubtitle>
          <SectionTitle>
            Lorem ipsum <br /> dolor sit amet consectetur
          </SectionTitle>
        </SectionHeader>
        <ProductPreviewList loading={arePopularProductsLoading}>
          {popularProducts?.data
            .filter((product) => Array.isArray(product.uploaded_images)) // TODO: remove this filter when the API is fixed
            .map((product) => (
              <ProductPreview key={product.id} product={product} />
            ))}
        </ProductPreviewList>
        <div className="flex items-center justify-center">
          <SectionButton>{t("see_more")}</SectionButton>
        </div>
      </Section>

      <Banner
        className="promotional-banner"
        style={{ backgroundImage: "url(/assets/images/model-variant-3.jpg)" }}
      >
        <div className="relative">
          <BannerTitle>Акционный баннер</BannerTitle>
          <CircleButton href="/">{t("go_to_store")}</CircleButton>
        </div>
      </Banner>

      <Section>
        <SectionHeader>
          <SectionSubtitle>{t("new_products")}</SectionSubtitle>
          <SectionTitle>
            Lorem ipsum <br /> dolor sit amet consectetur
          </SectionTitle>
        </SectionHeader>
        <ProductPreviewList loading={areNewProductsLoading}>
          {newProducts?.data
            .filter((product) => Array.isArray(product.uploaded_images)) // TODO: remove this filter when the API is fixed
            .map((product) => (
              <ProductPreview key={product.id} product={product} />
            ))}
        </ProductPreviewList>
        <div className="flex items-center justify-center">
          <SectionButton>{t("see_more")}</SectionButton>
        </div>
      </Section>

      <Banner
        className="collection-banner"
        style={{ backgroundImage: "url(/assets/images/model-variant-4.jpg)" }}
      >
        <CircleButton href="/">{t("go_to_store")}</CircleButton>
        <BannerParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum venenatis dolor, ut
          fringilla nisi cursus quis. Nulla aliquam porta urna, a porta ipsum tincidunt a.
        </BannerParagraph>
        <BannerParagraph>
          Fusce molestie erat eget leo facilisis, eu elementum erat aliquet. Etiam ornare, felis.
        </BannerParagraph>
      </Banner>
    </>
  );
};

export default HomeContainer;
