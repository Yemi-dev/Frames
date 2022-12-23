import React from 'react';
import { Typography } from 'ui/atoms/Typography';
import { NewsletterButton } from 'ui/svgs/NewsletterButton';

import { InputGroup, NewsletterContainer, NewsletterWrapper } from './index.styled';

const Newsletter = (): JSX.Element => {
  return (
    <NewsletterContainer>
      <NewsletterWrapper>
        <Typography variant="h2">Subscribe to our newsletter to receive freebies.</Typography>
        <InputGroup>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email to get freebies "
          />
          <button type="submit">
            <NewsletterButton />
          </button>
        </InputGroup>
      </NewsletterWrapper>
    </NewsletterContainer>
  );
};

export default Newsletter;
