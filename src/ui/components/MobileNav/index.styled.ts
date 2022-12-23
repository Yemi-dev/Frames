import styled from 'styled-components';

export const MobileNavContainer = styled.div`
  max-height: 100vh;
  height: 100%;
  background: black;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: width 350ms ease-in-out;
  display: flex;
  width: 0vw;
  &.open {
    width: 100vw;
  }
`;

export const MobileNavTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 27px 2rem;
  border-bottom: 1px solid #5e5e5e;
  svg {
    cursor: pointer;
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
  padding: 1rem 2rem;
  margin-top: -130px;
`;

export const LinksItem = styled.a<{ active: boolean }>`
  text-transform: capitalize;
  font-size: 36px;
  font-weight: ${({ active }) => (active ? '400' : '400')};
  color: ${({ active }) => (active ? 'white' : '#FDD961')};
  @media (max-width: 560px) {
    font-size: 24px;
  }
`;

export const MobileNavBottom = styled.div`
  text-align: center;
  padding: 1rem auto;
  margin: 2rem;
  border-top: 2px solid #ffffff;
`;

export const Copyright = styled.div`
  h3 {
    font-weight: 600;
    font-size: 20px;
    color: #fdd961;
    margin: 1rem auto 2rem;
  }
  span {
    font-weight: 400;
    margin-right: 5px;
  }
`;

export const FootSticker = styled.div`
  p {
    font-size: 14px;
    font-weight: 300;
  }
  b {
    font-size: 14px;
    font-weight: 700;
  }
`;
