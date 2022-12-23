import styled from 'styled-components';

export const CarouselContainer = styled.div`
  color: #fbf3e4;
  .image {
    width: 300px;
    opacity: 0.3;
  }
  .swiper-slide-active {
    .image {
      opacity: 1;
      width: 350px !important;
    }
  }

  .swiper-wrapper {
    margin-bottom: 2rem;
  }

  .swiper-pagination-bullet {
    background-color: black;
    width: 4.75px;
    height: 4.75px;
    border-radius: 7.33561px;
  }
  .swiper-pagination-bullet-active {
    width: 30px;
  }
  .swiper-pagination > span {
    color: black !important;
    opacity: 1;
  }
`;
