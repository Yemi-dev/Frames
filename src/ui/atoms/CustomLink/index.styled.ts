import styled from 'styled-components';

export const LinksItem = styled.a<{ active: boolean }>`
  text-transform: uppercase;
  border-bottom: 2.5px solid ${({ active }) => (active ? ' #232323' : 'none')} !important;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  color: ${({ active }) => (active ? '#232323' : '#777374')};
`;
