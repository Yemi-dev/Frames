import React from 'react';
import SingleDisplay from 'ui/components/SingleDisplay';

import { DisplaySectionContainer } from './index.styled';

const Display = (): JSX.Element => {
  return (
    <DisplaySectionContainer>
      <SingleDisplay
        className="first"
        title="The ideal piece of aesthetic art to adorn your space."
        text="When you or your guests walk into your home, their gaze is drawn to the dynamic and beautiful spots where you have placed our wall arts."
      />
      <SingleDisplay
        className="second"
        title="This is the type of piece to easily complete your space."
        text="To complete your look and feel in those empty-looking wall spaces, you'll need carefully chosen and framed wall art that crosses the T's and dots the I's of your Interior."
      />
      <SingleDisplay
        className="third"
        title="Our designs convey a 
powerful message to your mind."
        text="Art works that not only beautify your space, 
but also make you think, making it an 
excellent value for money."
      />
    </DisplaySectionContainer>
  );
};

export default Display;
