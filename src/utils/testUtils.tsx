import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { PropsWithChildren } from "react";
import { theme } from "../styles/theme/theme";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={testStore}>{children}</Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  render(ui, { wrapper: Wrapper });
};
