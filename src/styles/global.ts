/* stylelint-disable */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }


  html, 
  body {
    height:100%; 
    padding:0; 
    margin:0; 
    width:100%;
  }
  

  body {
    display:flex; 
    flex-direction:column;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.nero};
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Graphik', sans-serif;                 
  }


  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,  
  fieldset,
  label {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
