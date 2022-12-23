import React from 'react';
import { Typography } from 'ui/atoms/Typography';

import {
  TestifierID,
  TestifierImage,
  TestifierInfo,
  TestimonialCardContainer
} from './index.styled';

const TestimonialCard = ({
  text,
  src,
  name,
  title
}: {
  text: string;
  src: string;
  name: string;
  title: string;
}): JSX.Element => {
  return (
    <TestimonialCardContainer>
      <img className="mask" src="/uploads/MaskTape.png" alt="tape" />
      <Typography variant="p">{text}</Typography>
      <TestifierInfo>
        <TestifierImage src={src} alt="avi" />
        <TestifierID>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="p"> {title}</Typography>
        </TestifierID>
      </TestifierInfo>
    </TestimonialCardContainer>
  );
};

export default TestimonialCard;
