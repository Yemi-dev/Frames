import React from 'react';
import { Typography } from 'ui/atoms/Typography';
import { Arrow } from 'ui/svgs/Arrow';

import CustomButton from '../CustomButton';
import { DisplayImageArea, DisplayTextArea, SingleDisplayContainer } from './index.styled';

const SingleDisplay = ({
  title,
  text,
  className
}: {
  title: string;
  text: string;
  className: string;
}): JSX.Element => {
  return (
    <SingleDisplayContainer className={className}>
      <DisplayTextArea>
        <Typography variant="h2"> {title}</Typography>
        <Typography variant="p">{text}</Typography>
        <CustomButton onClick={() => (window.location.href = 'https://paystack.shop/darcy-frames')}>
          SHOP NOW
          <Arrow />
        </CustomButton>
      </DisplayTextArea>
      <DisplayImageArea></DisplayImageArea>
    </SingleDisplayContainer>
  );
};

export default SingleDisplay;
