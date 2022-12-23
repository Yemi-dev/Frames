import React, { useState } from 'react';
import MobileNav from 'ui/components/MobileNav';
import Nav from 'ui/components/Nav';

import { ErrorContainer, ErrorPageContainer } from './index.styled';

const ErrorPage = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <ErrorPageContainer>
      {!open && <Nav setOpen={setOpen} />}
      <MobileNav open={open} setOpen={setOpen} />
      <ErrorContainer>
        <h1>Ops! Error 404. </h1>
      </ErrorContainer>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
