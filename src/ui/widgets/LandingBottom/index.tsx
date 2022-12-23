import React from 'react';
import Newsletter from 'ui/components/Newsletter';

import Shop from '../Shop';
import Testimonials from '../Testimonials';
import { LandingBottomContainer } from './index.styled';

const LandingBottom = (): JSX.Element => {
  return (
    <LandingBottomContainer>
      <Newsletter />
      <Testimonials />
      <Shop />
    </LandingBottomContainer>
  );
};

export default LandingBottom;
