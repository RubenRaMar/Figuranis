import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it rendered", () => {
    test("Then it should show the credentials inputs", () => {
      const expectedArialsLabelsTexts = ["username", "password"];

      renderWithProviders(<LoginForm />);

      expectedArialsLabelsTexts.forEach((arialLabelText) => {
        const input = screen.getByLabelText(arialLabelText);

        expect(input).toBeInTheDocument();
      });
    });

    test("Then it should show the button with 'Login' text", () => {
      const expectedAlternativeText = "Login";

      renderWithProviders(<LoginForm />);

      const button = screen.getByRole("button", {
        name: expectedAlternativeText,
      });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a heading with the 'Welcome to, FIGURAniS' text", () => {
      const expectedAlternativeText = "Welcome to, FIGURAniS";

      renderWithProviders(<LoginForm />);

      const heading = screen.getByRole("heading", {
        name: expectedAlternativeText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a 'Log in to your account to access your figures' text", () => {
      const expectedText = "Log in to your account to access your figures";

      renderWithProviders(<LoginForm />);

      const heading = screen.getByText(expectedText);

      expect(heading).toBeInTheDocument();
    });
  });
});
