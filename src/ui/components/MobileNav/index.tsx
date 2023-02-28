import React from 'react';
import { useLocation } from 'react-router-dom';
import { CloseIcon } from 'ui/svgs/CloseIcon';
import { LogoWhite } from 'ui/svgs/LogoWhite';

import {
  Copyright,
  FootSticker,
  LinksItem,
  MobileNavBottom,
  MobileNavContainer,
  MobileNavLinks,
  MobileNavTop
} from './index.styled';

const MobileNav = ({ setOpen, open }): JSX.Element => {
  const CustomLink = ({ href, children }) => {
    const location = useLocation();
    const active = location.pathname === href ? true : false;
    return (
      <LinksItem href={href} active={active}>
        {children}
      </LinksItem>
    );
  };
  return (
    <MobileNavContainer className={open ? 'open' : ''}>
      <MobileNavTop>
        <LogoWhite />
        <CloseIcon onClick={() => setOpen(false)} />
      </MobileNavTop>
      <MobileNavLinks>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="https://paystack.shop/darcy-frames">Catalogue</CustomLink>
      </MobileNavLinks>
      <MobileNavBottom>
        <Copyright>
          <h3>
            {' '}
            <span>&copy; 2023</span>Frames By Dasola
          </h3>
        </Copyright>
        <FootSticker>
          <p>Website Designed by</p>
          <b>DASOLA AWOYE</b>
        </FootSticker>
      </MobileNavBottom>
    </MobileNavContainer>
  );
};

export default MobileNav;
