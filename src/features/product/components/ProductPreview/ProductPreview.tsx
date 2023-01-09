import type { ProductPreviewType } from "../../types";

import Link from "next/link";
import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";

import { useCurrentLocale } from "@/hooks";
import { asPrice, clsx } from "@/utils";

export interface ProductPreviewProps {
  product: ProductPreviewType;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({
  product: { uploaded_images, name_ro, name_ru, min_price, slug_ro, slug_ru },
}) => {
  const { showVersion } = useCurrentLocale();

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffectOnce(() => {
    const image = new Image();

    image.onload = () => {
      setIsImageLoaded(true);
    };

    image.src = uploaded_images[0]?.url;
  });

  return (
    <Link className="inline-block" href={`/shop/${showVersion({ ru: slug_ru, ro: slug_ro })}`}>
      <article className="product-preview">
        <div className="product-preview__body">
          <div className={clsx("product-preview__image", !isImageLoaded && "animate-pulse")}>
            <img
              src={
                isImageLoaded ? uploaded_images[0]?.url : "/assets/images/product-placeholder.jpg"
              }
              alt={showVersion({ ru: name_ru, ro: name_ro })}
              loading="lazy"
            />
          </div>
        </div>
        <div className="product-preview__caption">
          <h3 className="product-preview__name">{showVersion({ ru: name_ru, ro: name_ro })}</h3>
          <p className="product-preview__price">{asPrice(Number(min_price))}</p>
        </div>
      </article>
    </Link>
  );
};

export interface ProductPreviewListProps {
  className?: string;
  loading?: boolean;

  children: React.ReactNode;
}

export const ProductPreviewList: React.FC<ProductPreviewListProps> = ({
  className,
  loading,
  children,
}) => {
  if (loading) {
    return (
      <div className="products-preview__list animate-pulse">
        {Array.from(Array(4)).map((_, index) => (
          <div key={index} className="product-box">
            <div className="product-box__body border-none">
              <div className="aspect-square h-full max-h-72 w-full bg-zinc-300" />
            </div>
            <div className="product-box_caption">
              <div className="mt-0 h-6 w-9/12 bg-zinc-300" />
              <div className="mt-3 h-6 w-1/2 bg-zinc-300" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <div className={clsx("products-preview__list", className)}>{children}</div>;
};
