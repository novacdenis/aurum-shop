import type { ProductType } from "../../types";

import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

import { Section } from "@/components/Elements";
import { asPrice } from "@/utils";

import { useProductViewStore } from "../../stores";
import ProductViewActions from "./ProductViewActions";
import ProductViewAttributes from "./ProductViewAttributes";
import { ProductViewCarouselFallback } from "./ProductViewCarousel";
import ProductViewHelp from "./ProductViewHelp";

export interface ProductViewProps {
  data?: ProductType;
}

const DynamicProductViewSlider = dynamic(() => import("./ProductViewCarousel"), {
  ssr: false,
  loading: () => <ProductViewCarouselFallback />,
});

export const ProductView: React.FC<ProductViewProps> = ({ data }) => {
  const { t } = useTranslation();

  const selectedVariantId = useProductViewStore((store) => store.selectedVariantId);

  const variant = data?.variants.find((variant) => variant.id === selectedVariantId);

  return (
    <Section>
      <article className="product-view">
        <div className="product-view__carousel">
          <DynamicProductViewSlider images={data?.uploaded_images} />
        </div>
        <main className="product-view__info">
          <header className="product-view__header">
            <h1 className="product-view__title">{data?.name}</h1>
            <h2 className="product-view__price">
              {asPrice(variant?.price ?? data?.min_price ?? data?.max_price)}
            </h2>
          </header>
          <div className="product-view__attributes">
            <ProductViewAttributes variants={data?.variants} attributes={data?.attributes} />
          </div>
          <div className="product-view__description">
            <div className="product__description">
              <h5 className="product-view__section-title">{t("description")}</h5>
              <p>{data?.description}</p>
            </div>
          </div>
          <div className="product-view__actions">
            <ProductViewActions productId={data?.id} variant={variant} />
          </div>
          <div className="product-view__help">
            <ProductViewHelp />
          </div>
        </main>
      </article>
    </Section>
  );
};
