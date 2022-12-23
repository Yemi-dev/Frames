import React from 'react';
import { useLocation } from 'react-router-dom';

import { LinksItem } from './index.styled';
const CustomLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element => {
  const location = useLocation();
  const active = location.pathname === href ? true : false;
  return (
    <LinksItem href={href} active={active}>
      {children}
    </LinksItem>
  );
};

export default CustomLink;
