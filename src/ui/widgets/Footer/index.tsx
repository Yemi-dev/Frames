import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'ui/atoms/Typography';
import { Gmail } from 'ui/svgs/Gmail';
import { Instagram } from 'ui/svgs/Instagram';
import { Pinterest } from 'ui/svgs/Pinterest';
import { Twitter } from 'ui/svgs/Twitter';

import {
  ContactContainer,
  CopyrightContainer,
  FooterContainer,
  QuickLinksContainer,
  SocialsContainer,
  Telephone
} from './index.styled';

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <CopyrightContainer>
        <Typography variant="h5">
          {' '}
          <span>&copy; 2023</span> Frames by Dasola
        </Typography>

        <p>
          Website Designed by <b>DASOLA AWOYE</b>
        </p>
      </CopyrightContainer>
      <QuickLinksContainer>
        <Typography variant="h5"> Quicklinks</Typography>
        <Link to={'https://paystack.shop/darcy-frames'}> Catalogue</Link>
        <Link to={'/about'}> About</Link>
      </QuickLinksContainer>
      <ContactContainer>
        <Typography variant="h5"> Get in touch with us</Typography>
        <Telephone href="tel:08148705378"> (+234) 0814 870 5378</Telephone>
        <SocialsContainer>
          <a href={'mailto:awoyedasola1@gmail.com'} target="_blank" rel="noreferrer">
            <Gmail />
          </a>
          <a href={'https://twitter.com/dasola__'} target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href={'https://www.instagram.com/darcy_frames/'} target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href={'https://www.pinterest.com/awoyed/'} target="_blank" rel="noreferrer">
            <Pinterest />
          </a>
        </SocialsContainer>
      </ContactContainer>
    </FooterContainer>
  );
};

export default Footer;
