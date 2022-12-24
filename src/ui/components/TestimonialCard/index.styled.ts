import styled from 'styled-components';

export const TestimonialCardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #c1c1c1;
  border-radius: 20px;
  position: relative;
  width: 460px;
  padding: 2rem;
  .mask {
    position: absolute;
    top: -8px;
    left: 200px;
  }
  p {
    font-family: 'Graphik', sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #232323;
  }
  @media (max-width: 1200px) {
    width: 360px;
    .mask {
      left: 150px;
    }
  }
  @media (max-width: 860px) {
    width: 340px;
    .mask {
      left: 165px;
    }
  }
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 480px) {
    width: 320px;
    .mask {
      left: 120px;
    }
  }
  @media (max-width: 330px) {
    width: 290px;
  }
`;

export const TestifierInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  margin-top: 2rem;
`;
export const TestifierImage = styled.img`
  border-radius: 999px;
  width: 48px;
  height: 48px;
`;
export const TestifierID = styled.div`
  text-align: left;
  h5 {
    font-weight: 500;
    font-size: 18px;
    color: #231f20;
    font-family: 'Graphik', sans-serif;
  }
  p {
    font-weight: 300;
    font-size: 14px;
    color: #a19b9d;
    font-family: 'Graphik', sans-serif;
  }
  @media (max-width: 330px) {
    h5 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;
