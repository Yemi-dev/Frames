import React from 'react';

import { Typography } from '../../ui/atoms/Typography';
import { HelloContainer } from './index.styled';

export interface SampleProps {
  title: string;
  description: string;
}

const Sample = (props: SampleProps): JSX.Element => {
  const { title, description } = props;
  return (
    <HelloContainer>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="p">{description}</Typography>
    </HelloContainer>
  );
};

export default Sample;
