import styled from 'styled-components';

export const AboutInfoContainer = styled.div`
  width: 100%;
  padding: 8rem 0 0;
  background: #fbf3e4;
`;
export const PrimaryContainer = styled.div`
  width: 100%;
  background: #fbf3e4;
  padding: 3rem 101px;
  text-align: left;
  h2 {
    font-family: 'Graphik', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 62px;
    color: #000000;
    width: 90%;
  }
  p {
    font-family: 'Graphik', sans-serif;
    font-weight: 300;
    font-size: 40px;
    line-height: 62px;
    color: #000000;
    width: 90%;
  }
  @media (max-width: 1200px) {
    padding: 3rem 90px;
    h2,
    p {
      font-size: 32px;
      line-height: 50px;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 3rem 70px;
  }
  @media (max-width: 570px) {
    padding: 3rem 30px;
    h2,
    p {
      font-size: 24px;
      width: 100%;
      line-height: 40px;
    }
  }
`;
export const SecondaryContainer = styled.div`
  width: 100%;
  text-align: left;
  padding: 3rem 101px;
  background: white;
  p {
    font-family: 'Graphik', sans-serif;
    font-weight: 300;
    font-size: 40px;
    line-height: 62px;
    color: #000000;
    width: 90%;
  }
  @media (max-width: 1200px) {
    padding: 3rem 90px;
    p {
      font-size: 32px;
      line-height: 50px;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 3rem 70px;
  }
  @media (max-width: 570px) {
    padding: 3rem 30px;
    p {
      font-size: 24px;
      width: 100%;
      line-height: 40px;
    }
  }
`;
