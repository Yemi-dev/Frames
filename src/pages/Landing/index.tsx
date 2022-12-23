import React, { useState } from 'react';
import MobileNav from 'ui/components/MobileNav';
import Nav from 'ui/components/Nav';
import Display from 'ui/widgets/Display';
import Footer from 'ui/widgets/Footer';
import HeroSection from 'ui/widgets/Hero';
import LandingBottom from 'ui/widgets/LandingBottom';

import { LandingContainer } from './index.styled';

const Landing = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <LandingContainer>
      {!open && <Nav setOpen={setOpen} />}
      <MobileNav setOpen={setOpen} open={open} />
      <HeroSection />
      <Display />
      <LandingBottom />
      <Footer />
    </LandingContainer>
  );
};

export default Landing;
