import styled from 'styled-components';

export const SingleDisplayContainer = styled.div`
  display: grid;
  gap: 100px;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f6f6f6;
  margin: 0 auto;
  height: fit-content;
  padding: 50px 103px;
  @media (max-width: 1200px) {
    gap: 50px;
  }
  @media (max-width: 980px) {
    gap: 30px;
  }
  @media (max-width: 900px) {
    grid-template-columns: auto;
    justify-content: center;
    margin: 0 auto;
    padding: 16px 103px;
  }
`;

export const DisplayTextArea = styled.div`
  text-align: left;
  width: 100%;

  h2 {
    font-family: 'Graphik', sans-serif;
    font-weight: 600;
    font-size: 40px;
    color: #232323;
    margin-bottom: 1rem;
    line-height: 50px;
  }
  p {
    font-family: 'Graphik', sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: #232323;
    margin-bottom: 1rem;
  }
  @media (max-width: 900px) {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding: 4rem 0 1rem;
    button {
      margin: 0 auto;
    }
  }
  @media (max-width: 560px) {
    width: 100%;
  }
  @media (max-width: 460px) {
    h2 {
      font-size: 30px;
      line-height: 35px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const DisplayImageArea = styled.div`
  background-image: url('/uploads/SittingRoomVariant.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 550px;
  height: 530px;
  transition: all 800ms ease-in-out;
  &:hover {
    background-image: url('/uploads/SittingRoomZoomed.png');
  }
  @media (max-width: 1200px) {
    width: 450px;
  }
  @media (max-width: 980px) {
    width: 400px;
  }
  @media (max-width: 900px) {
    width: 600px;
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    width: 600px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 500px;
    margin: 0 auto;
  }
  @media (max-width: 560px) {
    width: 400px;
    margin: 0 auto;
  }
  @media (max-width: 460px) {
    width: 310px;
    margin: 0 auto;
  }
`;
