import React, { useState } from 'react';
import MobileNav from 'ui/components/MobileNav';
import Nav from 'ui/components/Nav';
import Newsletter from 'ui/components/Newsletter';
import AboutInfo from 'ui/widgets/AboutInfo';
import Footer from 'ui/widgets/Footer';
import Shop from 'ui/widgets/Shop';
import Testimonials from 'ui/widgets/Testimonials';

import { AboutContainer } from './index.styled';

const About = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <AboutContainer>
      {!open && <Nav setOpen={setOpen} />}
      <MobileNav open={open} setOpen={setOpen} />
      <AboutInfo />
      <Shop />
      <Testimonials />
      <Newsletter />
      <Footer />
    </AboutContainer>
  );
};

export default About;
