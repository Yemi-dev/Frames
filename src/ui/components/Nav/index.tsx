import React from 'react';
import CustomLink from 'ui/atoms/CustomLink';
import { Cart } from 'ui/svgs/CartIcon';
import { Logo } from 'ui/svgs/Logo';
import { Menu } from 'ui/svgs/Menu';

import { CartLink, MenuWrapper, NavContainer, NavLinks, NavWrapper } from './index.styled';

const Nav = ({ setOpen }: { setOpen: any }): JSX.Element => {
  return (
    <NavContainer>
      <NavWrapper>
        <Logo />
        <NavLinks>
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/about">About</CustomLink>
          <CustomLink href="https://paystack.shop/darcy-frames">Catalogue</CustomLink>
        </NavLinks>
        <CartLink href="https://paystack.shop/darcy-frames">
          <Cart />
        </CartLink>
        <MenuWrapper onClick={() => setOpen(true)}>
          <Menu />
        </MenuWrapper>
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;
