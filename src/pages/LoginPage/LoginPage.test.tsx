import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, store } from "../../store";
import LoginPage from "./LoginPage";
import {
  userDataLoggedMock,
  userMockCredentials,
} from "../../mocks/user/userMocks";

describe("Given a LoginPage component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with 'LOGIN' text", () => {
      const expectedTest = "LOGIN";
      const mockState: PreloadedState<RootState> = { user: userDataLoggedMock };

      renderWithProviders(<LoginPage />, mockState);

      const heading = screen.getByRole("heading", { name: expectedTest });

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
      renderWithProviders(<LoginPage />);

      const usernameInput = screen.getByLabelText(expectedArialsLabelsUsername);
      const passwordInput = screen.getByLabelText(expectedArialsLabelsPassword);
      const button = screen.getByRole("button", {
        name: "Login",
      });

      await userEvent.type(usernameInput, username);
      await userEvent.type(passwordInput, password);
      await userEvent.click(button);

      expect(window.location.pathname).toBe("/figures");
    });
  });
});
