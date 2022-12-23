import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 63px 101px 30px;
  background: #000000;
  display: flex;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 560px) {
    padding: 63px 45px 30px;
  }
`;
export const QuickLinksContainer = styled.div`
  h5 {
    color: #f5da2a;
    font-weight: 600;
    font-size: 16px;
    font-family: 'Graphik', sans-serif;
    margin-bottom: 2.5rem;
  }
  a {
    display: block;
    margin-top: 0.5rem;
    font-weight: 300;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 3rem;
  }
`;
export const CopyrightContainer = styled.div`
  h5 {
    color: #f5da2a;
    font-weight: 600;
    font-size: 16px;
    font-family: 'Graphik', sans-serif;
    margin-bottom: 4rem;
    span {
      font-weight: 300;
    }
  }
  p {
    font-weight: 300;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1rem;
    border-top: 2px solid #ffffff;
    width: 100%;
    padding-top: 2rem;
    h5 {
      margin-bottom: 2.5rem;
    }
    p {
      b {
        display: block;
        padding-top: 3px;
      }
    }
  }
`;
export const ContactContainer = styled.div`
  h5 {
    color: #f5da2a;
    font-weight: 600;
    font-size: 16px;
    font-family: 'Graphik', sans-serif;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 3rem;
  }
`;
export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 1.5rem;
  width: 100%;
  a {
    cursor: pointer;
  }
`;
export const Telephone = styled.a`
  font-weight: 300;
  font-size: 12px;
  width: 100%;
`;
