import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
  width: 100%;
  padding: 4rem 103px;
  background: #f6f6f6;
  @media (max-width: 560px) {
    padding: 4rem 20px;
  }
`;
export const TestimonialHeader = styled.div`
  text-align: center;
  margin: 2rem auto;
  h2 {
    font-family: 'Graphik', sans-serif;
    font-weight: 600;
    font-size: 32px;
    color: black;
  }
`;

export const TestimonialCards = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  gap: 36px 32px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
