import React from 'react';
import { Typography } from 'ui/atoms/Typography';
import ArtPiece from 'ui/components/ArtPiece';
import Carousel from 'ui/components/Carousel';
import CustomButton from 'ui/components/CustomButton';
import { Arrow } from 'ui/svgs/Arrow';
import { Discount } from 'ui/svgs/Discount';
import { FramedPicture } from 'ui/svgs/FramedPicture';
import { ScrollArrowBold } from 'ui/svgs/ScrollArrowBold';
import { ScrollArrowRegular } from 'ui/svgs/ScrollArrowRegular';

import {
  AnimatedCarouselSection,
  HeroBottomContainer,
  HeroBottomFramesSection,
  HeroBottomHeader,
  HeroBottomTopSection,
  HeroHeader,
  HeroHeaderContainer,
  HeroSectionContainer,
  HeroTopContainer,
  QuotesSection,
  StaticCarouselSection
} from './index.styled';

const HeroSection = (): JSX.Element => {
  return (
    <HeroSectionContainer>
      <HeroTopContainer>
        <HeroHeaderContainer>
          <HeroHeader>
            <Typography variant="h3">
              Framed Arts are <br /> the
              <span>
                focal <FramedPicture /> point
              </span>{' '}
              of <br /> <span>your home</span>
            </Typography>
          </HeroHeader>
          <Typography variant="p">
            Explore our beautiful and <span>aesthetically pleasing</span> wall art for your home.
          </Typography>
          <ScrollArrowBold />
        </HeroHeaderContainer>
        <StaticCarouselSection>
          <img src="/uploads/H1 Frames.png" alt="images" />
          <QuotesSection>
            <Typography variant="p">
              β Art is a <b>collaboration between God and the artist</b>, and the less the artist
              does the better.β
            </Typography>
            <Typography variant="p"> β Andre Gide</Typography>
          </QuotesSection>
        </StaticCarouselSection>
        <AnimatedCarouselSection>
          <Carousel />
          <QuotesSection>
            <Typography variant="p">
              βArt is a <b>collaboration between God and the artist</b>, and the less the artist
              does the better.β
            </Typography>
            <Typography variant="p"> β Andre Gide</Typography>
          </QuotesSection>
        </AnimatedCarouselSection>
      </HeroTopContainer>
      <HeroBottomContainer>
        <HeroBottomTopSection>
          <HeroBottomHeader>
            <Typography variant="h3">Featured Products</Typography>
            <ScrollArrowRegular />
          </HeroBottomHeader>
          <Discount />
        </HeroBottomTopSection>
        <HeroBottomFramesSection>
          <a href="https://paystack.shop/darcy-frames?product=anonymous-edpvfm">
            {' '}
            <ArtPiece src="/uploads/Self Help.png" name="Anonymous" amount="15,888" />
          </a>
          <a href="https://paystack.shop/darcy-frames?product=diy-hoikrj">
            {' '}
            <ArtPiece src="/uploads/DIY.png" name="DIY" amount="16,888" />
          </a>
          <a href="https://paystack.shop/darcy-frames?product=diy-hoikrj">
            {' '}
            <ArtPiece src="/uploads/MAstery.png" name="Focus" amount="16,888" />
          </a>
          <a href="https://paystack.com/buy/robert-greene-quotes-giafpg">
            {' '}
            <ArtPiece
              src="/uploads/Nothing to see here.png"
              name="Poster About Nothing"
              amount="15,888"
            />
          </a>
        </HeroBottomFramesSection>
        <CustomButton onClick={() => (window.location.href = 'https://paystack.shop/darcy-frames')}>
          VIEW CATALOGUE
          <Arrow />
        </CustomButton>
      </HeroBottomContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
