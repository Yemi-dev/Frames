import styled from 'styled-components';

export const ShopContainer = styled.div`
  width: 100%;
  padding: 6rem 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    img {
      transform: rotate(90deg);
    }
    .img1 {
      margin-top: -80px;
    }
    .img2 {
      margin-bottom: -80px;
    }
  }
`;

export const ShopTextContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  h3 {
    font-family: 'Graphik', sans-serif;
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    color: #232323;
    line-height: 50px;
  }

  button {
    margin: 1rem auto;
    padding: 16px 24px;
    font-family: 'Graphik', sans-serif;
    font-weight: 500;
    font-size: 32px;
    gap: 15px;
  }
  svg {
    width: 33px !important;
    height: 33px !important;
    font-weight: 500;
  }
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 900px) {
    width: 60%;
    h3 {
      font-size: 35px;
    }
  }
  @media (max-width: 480px) {
    width: 85%;
    h3 {
      font-size: 30px;
    }
    button {
      font-size: 24px;
    }
  }
`;
