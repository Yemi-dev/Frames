import styled from 'styled-components';

export const HeroSectionContainer = styled.div`
  width: 100%;
  height: fit-content;
  font-family: 'Graphik', sans-serif;
`;

export const HeroTopContainer = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #fbf3e4;
  text-align: center;
  padding: 2.5rem 0;
`;

export const HeroHeader = styled.div`
  h3 {
    font-family: 'Graphik', sans-serif;
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 86.4px;
    color: #000000;
    padding-bottom: 2rem;
  }

  span {
    font-weight: 600;
  }
  @media (max-width: 960px) {
    h3 {
      font-size: 4.5rem;
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 4rem;
    }
  }
  @media (max-width: 560px) {
    h3 {
      font-size: 55px;
      line-height: 60px;

      svg {
        display: none;
      }
    }
  }
  @media (max-width: 480px) {
    h3 {
      font-size: 40px;
      line-height: 50px;
    }
  }
`;

export const HeroHeaderContainer = styled.div`
  width: 55%;
  text-align: center;
  margin: 5rem auto;
  padding: 2rem 0;
  p {
    font-family: 'Graphik', sans-serif;
    color: #000000;
    font-weight: 300;
    margin-bottom: 1rem;
    span {
      font-weight: 700;
    }
  }
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 85%;
    margin: 4rem auto 2rem;
  }
  @media (max-width: 360px) {
    svg {
      width: 250px;
    }
  }
`;

export const StaticCarouselSection = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 70px;
  img {
    margin-top: -5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const AnimatedCarouselSection = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const QuotesSection = styled.div`
  text-align: center;
  width: 70%;
  margin: 3rem auto 2rem;
  p {
    font-size: 30px;
    color: #232323;
    font-weight: 300;
    font-family: 'Graphik', sans-serif;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;
export const HeroBottomContainer = styled.div`
  background-color: white;
  padding: 2rem 0;
  min-height: 80vh;
  button {
    margin: 2rem auto;
  }
`;
export const HeroBottomTopSection = styled.div`
  margin: 0 auto;
  padding-top: 500px;
  width: fit-content;
  text-align: center;
  & > svg {
    width: 120px;
    margin: 1rem auto;
  }
  @media (max-width: 968px) {
    padding-top: 450px;
  }
  @media (max-width: 768px) {
    padding-top: 50px;
    & > svg {
      width: 100px;
    }
  }
`;
export const HeroBottomHeader = styled.div`
  text-align: center;
  h3 {
    color: #232323;
    text-transform: uppercase;
    font-family: 'Graphik', sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
`;
export const HeroBottomFramesSection = styled.div`
  display: grid;
  max-width: 1500px;
  margin: 0 auto;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  gap: 38px;
  width: 100%;
  padding: 5px 100px;
  @media (max-width: 1200px) {
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 50px;
  }
  @media (max-width: 768px) {
    padding: 5px 30px;
  }
  @media (max-width: 560px) {
    grid-template-columns: auto;
    justify-content: center;
    gap: 50px;
  }
`;
