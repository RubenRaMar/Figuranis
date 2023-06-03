import "styled-components";

declare module "styled-components" {
  interface colorStructure {
    primary: string;
    secundary: string;
    dark: string;
    light: string;
    darkGrey: string;
    lightGrey: string;
    error: string;
    errorBackground: string;
    mainBackground: string;
    secondaryBackground: string;
    pending: string;
    borderInputs: string;
    placeholder: string;
  }

  interface fontStructure {
    primary: string;
    secondary: string;
  }
  interface DefaultTheme {
    colors: colorStructure;
    fonts: fontStructure;
  }
}
