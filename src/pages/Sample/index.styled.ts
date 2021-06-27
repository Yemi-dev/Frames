import styled from 'styled-components';

export const HelloContainer = styled.div`
  height: 500px;
  width: 500px;
  background-color: red;
  color: ${({ theme }) => theme.colors.white} !important;
  font-weight: bold;
`;
