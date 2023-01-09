import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CSSTransition } from "react-transition-group";
import { Lazy, Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

import { CircleButton } from "@/components/Elements";

interface SlideProps {
  image: string;
  title: React.ReactNode;
  nextSlideTitle: React.ReactNode;
  goToNextSlide: () => void;
}

const Slide: React.FC<SlideProps> = ({ image, title, nextSlideTitle, goToNextSlide }) => {
  const { t } = useTranslation();
  const { isActive } = useSwiperSlide();

  const slideContentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home-slider__slide" style={{ backgroundImage: `url(${image})` }}>
      <CSSTransition in={isActive} timeout={1000} nodeRef={slideContentRef}>
        <div className="home-slider__slide-content" ref={slideContentRef}>
          <div className="relative flex-grow">
            <h1 className="home-slider__slide-title">{title}</h1>
            <CircleButton href="/" className="home-slider__slide-button">
              {t("go_to_store")}
            </CircleButton>
          </div>
          <button className="home-slider__slide-pagination" onClick={goToNextSlide}>
            {nextSlideTitle}
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

export const SliderFallback: React.FC = () => {
  return (
    <div className="home-slider animate-pulse">
      <div className="h-full w-full bg-zinc-300" />
    </div>
  );
};

export const Slider: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const slideTo = useCallback(
    (index: number) => () => {
      if (swiper) {
        swiper.slideTo(index);
      }
    },
    [swiper]
  );

  return (
    <section className="home-slider">
      <Swiper className="h-full" onSwiper={setSwiper} modules={[Lazy]} slidesPerView={1} lazy>
        <SwiperSlide>
          <Slide
            title={"Текст первого \n слайда"}
            nextSlideTitle={"Текст второго \n слайда"}
            image="https://images.unsplash.com/photo-1637243175600-39d3f62dad04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            goToNextSlide={slideTo(1)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title={"Текст второго \n слайда"}
            nextSlideTitle={"Текст первого \n слайда"}
            image="https://images.unsplash.com/photo-1657658153344-3fa560150950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            goToNextSlide={slideTo(0)}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
