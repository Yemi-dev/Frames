import React from 'react';
import { Typography } from 'ui/atoms/Typography';
import CustomButton from 'ui/components/CustomButton';
import { Arrow } from 'ui/svgs/Arrow';

import { ShopContainer, ShopTextContainer } from './index.styled';

const Shop = (): JSX.Element => {
  return (
    <ShopContainer>
      <img className="img1" src="/uploads/left.png" alt="img" />
      <ShopTextContainer>
        <Typography variant="h3">
          Do you want to give your space a classy and aesthetic look ?
        </Typography>
        <CustomButton>
          SHOP NOW
          <Arrow />
        </CustomButton>
      </ShopTextContainer>
      <img className="img2" src="/uploads/right.png" alt="img" />
    </ShopContainer>
  );
};

export default Shop;
