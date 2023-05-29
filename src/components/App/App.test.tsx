import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme/theme";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'Hello world!", () => {
      const expectedText = "FIGURANIS";

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
