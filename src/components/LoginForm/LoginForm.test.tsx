import { expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import LoginForm from "./LoginForm";
import { userMockCredentials } from "../../mocks/user/userMocks";

describe("Given a LoginForm component", () => {
  const usernameText = "username";
  const passwordText = "password";
  const expectedArialsLabelsTexts = [usernameText, passwordText];
  const loginText = "Login";
  const submitOnClick = vi.fn();

  describe("When it rendered", () => {
    test("Then it should show the credentials inputs", () => {
      renderWithProviders(<LoginForm actionOnClick={submitOnClick} />);

      expectedArialsLabelsTexts.forEach((arialLabelText) => {
        const input = screen.getByLabelText(arialLabelText);

        expect(input).toBeInTheDocument();
      });
    });

    test("Then it should show the button with 'Login' text", () => {
      renderWithProviders(<LoginForm actionOnClick={submitOnClick} />);

      const loginButton = screen.getByRole("button", {
        name: loginText,
      });

      expect(loginButton).toBeInTheDocument();
    });

    test("Then it should show a heading with the 'Welcome to, FIGURAniS' text", () => {
      const welcomeText = "Welcome to, FIGURAniS";

      renderWithProviders(<LoginForm actionOnClick={submitOnClick} />);

      const heading = screen.getByRole("heading", {
        name: welcomeText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it shoul show a disabled button", async () => {
      renderWithProviders(<LoginForm actionOnClick={submitOnClick} />);

      const button = screen.getByRole("button", {
        name: loginText,
      });

      const usernameInput = screen.getByLabelText(usernameText);
      const passwordInput = screen.getByLabelText(passwordText);

      await userEvent.clear(usernameInput);
      await userEvent.clear(passwordInput);

      expect(button).toBeDisabled();
    });
  });

  describe("When rendering and a user types 'Xavi' in username input", () => {
    test("Then it should show 'Xavi' in the username input", async () => {
      renderWithProviders(<LoginForm actionOnClick={submitOnClick} />);

      const usernameInput = screen.getByLabelText(usernameText);

      await userEvent.clear(usernameInput);
      await userEvent.type(usernameInput, userMockCredentials.username);

      expect(usernameInput).toHaveValue(userMockCredentials.username);
    });
  });

  describe("When rendering and a user types 'champion' in username input", () => {
    test("Then it should show 'champion' in the username input", async () => {
      renderWithProviders(<LoginForm actionOnClick={submitOnClick} />);

      const passwordInput = screen.getByLabelText(passwordText);

      await userEvent.clear(passwordInput);
      await userEvent.type(passwordInput, userMockCredentials.password);

      expect(passwordInput).toHaveValue(userMockCredentials.password);
    });
  });

  describe("When rendering and a user types 'Xavi' as the username 'champion' as the password", () => {
    test("Then it should  the user should be able to submit the form", async () => {
      renderWithProviders(<LoginForm actionOnClick={submitOnClick} />);

      const usernameInput = screen.getByLabelText(usernameText);
      const passwordInput = screen.getByLabelText(passwordText);
      const button = screen.getByRole("button", {
        name: loginText,
      });

      await userEvent.type(usernameInput, userMockCredentials.username);
      await userEvent.type(passwordInput, userMockCredentials.password);
      await userEvent.click(button);

      expect(submitOnClick).toHaveBeenCalled();
    });
  });
});
