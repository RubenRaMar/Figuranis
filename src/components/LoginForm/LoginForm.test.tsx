import { expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import LoginForm from "./LoginForm";
import { userMockCredentials } from "../../mocks/user/userMocks";

describe("Given a LoginForm component", () => {
  const expectedArialsLabelsTexts = ["username", "password"];
  const expectedAlternativeButtonText = "Login";
  const handleOnClick = vi.fn();

  describe("When it rendered", () => {
    test("Then it should show the credentials inputs", () => {
      renderWithProviders(<LoginForm actionOnClick={handleOnClick} />);

      expectedArialsLabelsTexts.forEach((arialLabelText) => {
        const input = screen.getByLabelText(arialLabelText);

        expect(input).toBeInTheDocument();
      });
    });

    test("Then it should show the button with 'Login' text", () => {
      renderWithProviders(<LoginForm actionOnClick={handleOnClick} />);

      const button = screen.getByRole("button", {
        name: expectedAlternativeButtonText,
      });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a heading with the 'Welcome to, FIGURAniS' text", () => {
      const expectedAlternativeText = "Welcome to, FIGURAniS";

      renderWithProviders(<LoginForm actionOnClick={handleOnClick} />);

      const heading = screen.getByRole("heading", {
        name: expectedAlternativeText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a 'Log in to your account to access your figures' text", () => {
      const expectedText = "Log in to your account to access your figures";

      renderWithProviders(<LoginForm actionOnClick={handleOnClick} />);

      const heading = screen.getByText(expectedText);

      expect(heading).toBeInTheDocument();
    });

    test("Then it shoul show a disabled button", () => {
      renderWithProviders(<LoginForm actionOnClick={handleOnClick} />);

      const button = screen.getByRole("button", {
        name: expectedAlternativeButtonText,
      });

      expect(button).toBeDisabled();
    });
  });

  describe("When rendering and a user types 'Xavi' in username input", () => {
    test("Then it should show 'Xavi' in the username input", async () => {
      renderWithProviders(<LoginForm actionOnClick={handleOnClick} />);

      const input = screen.getByLabelText(expectedArialsLabelsTexts[0]);

      await userEvent.type(input, userMockCredentials.username);

      expect(input).toHaveValue(userMockCredentials.username);
    });
  });

  describe("When rendering and a user types 'champion' in username input", () => {
    test("Then it should show 'champion' in the username input", async () => {
      renderWithProviders(<LoginForm actionOnClick={handleOnClick} />);

      const input = screen.getByLabelText(expectedArialsLabelsTexts[1]);

      await userEvent.type(input, userMockCredentials.password);

      expect(input).toHaveValue(userMockCredentials.password);
    });
  });

  describe("When rendering and a user types 'Xavi' as the username 'champion' as the password", () => {
    test("Then it should  the button should be enabled", async () => {
      renderWithProviders(<LoginForm actionOnClick={handleOnClick} />);

      const usernameInput = screen.getByLabelText(expectedArialsLabelsTexts[0]);
      const passwordInput = screen.getByLabelText(expectedArialsLabelsTexts[1]);
      const button = screen.getByRole("button", {
        name: expectedAlternativeButtonText,
      });

      await userEvent.type(usernameInput, userMockCredentials.username);
      await userEvent.type(passwordInput, userMockCredentials.password);
      await userEvent.click(button);

      expect(handleOnClick).toHaveBeenCalled();
    });
  });
});
