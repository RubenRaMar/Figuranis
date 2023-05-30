import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    color: {
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
    };
    font: {
      primary: string;
    };
  }
}
