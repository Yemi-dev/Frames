import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  padding: 20px 103px;
  color: #777374;
  z-index: 5;
  @media (max-width: 768px) {
    padding: 20px 55px;
  }
  @media (max-width: 568px) {
    padding: 20px 25px;
  }
`;
export const NavWrapper = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const NavLinks = styled.ul`
  width: fit-content;
  display: flex;
  align-items: start;
  gap: 16px;
  font-size: 14px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartLink = styled.a`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MenuWrapper = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
`;
