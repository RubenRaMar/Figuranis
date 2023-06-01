import { createGlobalStyle } from "styled-components";
import { themeColors, themeFonts } from "./theme/theme";

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
    background-color: ${themeColors.mainBackground};
    color: ${themeColors.light};
    font-family: ${themeFonts.primary}, sans-serif;
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
