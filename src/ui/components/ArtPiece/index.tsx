import React from 'react';
import { Typography } from 'ui/atoms/Typography';

import { ArtContainer } from './index.styled';

const ArtPiece = ({
  src,
  name,
  amount
}: {
  src: string;
  name: string;
  amount: string;
}): JSX.Element => {
  return (
    <ArtContainer>
      <img src={src} alt="img" />
      <Typography variant="p" className="name">
        {name}
      </Typography>
      <Typography variant="p" className="amount">
        ₦{amount}
      </Typography>
    </ArtContainer>
  );
};

export default ArtPiece;
