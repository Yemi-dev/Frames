import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import React from 'react';
import SwiperCore, { A11y, Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import { CarouselContainer } from './index.styled';

SwiperCore.use([Pagination, A11y, Autoplay, EffectCoverflow]);
const Carousel = (): JSX.Element => {
  return (
    <CarouselContainer>
      <Swiper
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        initialSlide={2}
        autoplay
        centeredSlides
        loop
        // effect="creative"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <img className="image" src="/uploads/Practice frame.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src="/uploads/Practice frame 3.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src="/uploads/Rebel frame.png" alt="img" />
        </SwiperSlide>
        .
      </Swiper>
    </CarouselContainer>
  );
};

export default Carousel;
