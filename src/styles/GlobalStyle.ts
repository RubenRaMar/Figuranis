import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  ::after,
  ::before {
  box-sizing: border-box;
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  
  body {
    background-color: ${(prop) => prop.theme.color.mainBackground};
    color: ${(prop) => prop.theme.color.light};
    font-family: ${(prop) => prop.theme.font.primary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    font-family: inherit;
  }

  button {
    font-family: inherit;
    color: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
