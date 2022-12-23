import React from 'react';

import { CustomButtonContainer } from './index.styled';

const CustomButton = ({
  children,
  type,
  disabled,
  onClick
}: {
  children: React.ReactNode;
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
}): JSX.Element => {
  return (
    <CustomButtonContainer onClick={onClick} disabled={disabled}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
