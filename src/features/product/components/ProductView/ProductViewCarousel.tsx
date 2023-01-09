import type { ProductImageType } from "../../types";

import { useState } from "react";
import { Lazy, Navigation, Swiper as SwiperType, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const ProductViewCarouselFallback: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-video h-full max-h-96 w-full bg-zinc-300" />
      <div className="mt-2 grid grid-cols-3 gap-2 xl:mt-5 xl:gap-5">
        <div className="aspect-video h-full max-h-44 w-full bg-zinc-300" />
        <div className="aspect-video h-full max-h-44 w-full bg-zinc-300" />
        <div className="aspect-video h-full max-h-44 w-full bg-zinc-300" />
      </div>
    </div>
  );
};

export interface ProductViewCarouselProps {
  images?: ProductImageType[];
}

const ProductViewCarousel: React.FC<ProductViewCarouselProps> = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        className="product-view__carousel-main"
        modules={[Thumbs, Lazy]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides
        lazy
        breakpoints={{
          1280: {
            spaceBetween: 20,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.url}
              alt={`Product variant #${index}`}
              className="swiper-lazy"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="product-view__carousel-thumbs"
        modules={[Navigation, Thumbs, Lazy]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress
        lazy
        height={640}
        breakpoints={{
          1280: {
            spaceBetween: 20,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.url}
              alt={`Product variant #${index}`}
              className="swiper-lazy"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductViewCarousel;
