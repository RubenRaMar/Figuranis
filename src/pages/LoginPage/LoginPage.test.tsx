import { render, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, store } from "../../store";
import LoginPage from "./LoginPage";
import {
  userDataLoggedMock,
  userMockCredentials,
} from "../../mocks/user/userMocks";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme/theme";
import { Provider } from "react-redux";
import { LazyLoginPage } from "../../routers/lazyPages/lazyPages";
import pathList from "../../routers/pathList/pathList";

describe("Given a LoginPage component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with 'LOGIN' text", async () => {
      const expectedTest = "LOGIN";
      const mockState: PreloadedState<RootState> = { user: userDataLoggedMock };

      renderWithProviders(<LazyLoginPage />, mockState);

      const heading = await waitFor(() =>
        screen.getByRole("heading", { name: expectedTest })
      );

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it renderd and the user logs in", () => {
    const expectedArialsLabelsUsername = "username";
    const expectedArialsLabelsPassword = "password";
    const { username, password } = userMockCredentials;

    test("Then it should keep it in the stage", async () => {
      renderWithProviders(<LoginPage />);

      const usernameInput = screen.getByLabelText(expectedArialsLabelsUsername);
      const passwordInput = screen.getByLabelText(expectedArialsLabelsPassword);
      const button = screen.getByRole("button", {
        name: "Login",
      });

      await userEvent.type(usernameInput, username);
      await userEvent.type(passwordInput, password);
      await userEvent.click(button);

      const state = store.getState().user;

      expect(state).toStrictEqual(userDataLoggedMock);
    });

    test("Then you should redirect to the figures page", async () => {
      const routesTest: RouteObject[] = [
        { path: `${pathList.root}`, element: <LoginPage /> },
        { path: `${pathList.figures}`, element: <LoginPage /> },
      ];

      const appRouterTest = createBrowserRouter(routesTest);

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <RouterProvider router={appRouterTest} />
          </Provider>
        </ThemeProvider>
      );

      const usernameInput = screen.getByLabelText(expectedArialsLabelsUsername);
      const passwordInput = screen.getByLabelText(expectedArialsLabelsPassword);
      const button = screen.getByRole("button", {
        name: "Login",
      });

      await userEvent.type(usernameInput, username);
      await userEvent.type(passwordInput, password);
      await userEvent.click(button);

      expect(window.location.pathname).toBe(`${pathList.figures}`);
    });
  });
});
