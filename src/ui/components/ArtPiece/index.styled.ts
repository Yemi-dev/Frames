import styled from 'styled-components';

export const ArtContainer = styled.div`
  width: fit-content;
  img {
    width: 280px;
    height: 310px;
  }
  .name {
    color: #232323;
    font-size: 16px;
    font-weight: 300;
    text-align: left;
    font-family: 'Graphik', sans-serif;
  }
  .amount {
    color: #232323;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    font-family: 'Graphik', sans-serif;
  }
  @media (max-width: 560px) {
    .name,
    .amount {
      text-align: center;
    }
  }
`;
