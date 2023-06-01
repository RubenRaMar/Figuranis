import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import MainHeader from "./MainHeader";
import { userMockCredentials } from "../../mocks/user/userMocks";
import LoginPage from "../../pages/LoginPage/LoginPage";
import userEvent from "@testing-library/user-event";

describe("Given a MainHeader component", () => {
  const expectedAlternativeText =
    "A showcase with a shopping list with figurines";

  describe("When it rendering", () => {
    test("Then it should show a logo image", () => {
      const expectedAlternativeText = "Figuranis logotype";

      renderWithProviders(<MainHeader />);

      const logo = screen.getByRole("img", { name: expectedAlternativeText });

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show a Logout button icon", () => {
      const expectedAlternativeText = "Logout button icon";

      renderWithProviders(<MainHeader />);

      const logo = screen.getByRole("img", { name: expectedAlternativeText });

      expect(logo).toBeInTheDocument();
    });

    describe("When it rendering and the user is not logged in", () => {
      test("Then it should not show the image of a showcase with a shopping list with figurines", async () => {
        renderWithProviders(<MainHeader />);

        const image = screen.queryByAltText(expectedAlternativeText);

        expect(image).not.toBeInTheDocument();
      });
    });

    describe("When it rendering and the user is logged", () => {
      test("Then it should show the image of a showcase with a shopping list with figurines", async () => {
        const expectedArialsLabelsUsername = "username";
        const expectedArialsLabelsPassword = "password";
        const expectedAlternativeTextButton = "Login";
        const { username, password } = userMockCredentials;

        renderWithProviders(<LoginPage />);

        const usernameInput = screen.getByLabelText(
          expectedArialsLabelsUsername
        );
        const passwordInput = screen.getByLabelText(
          expectedArialsLabelsPassword
        );
        const button = screen.getByRole("button", {
          name: expectedAlternativeTextButton,
        });

        await userEvent.type(usernameInput, username);
        await userEvent.type(passwordInput, password);
        await userEvent.click(button);

        renderWithProviders(<MainHeader />);

        const image = screen.queryByAltText(expectedAlternativeText);

        expect(image).toBeInTheDocument();
      });
    });

    describe("When it renderd with a logged user and he click on the Loyout button", () => {
      test("Then it should redirect the user to LoginPage", async () => {
        const expectedPath = "/";
        const expectedArialLabel = "Logout button";

        renderWithProviders(<MainHeader />);

        const button = screen.getByRole("button", {
          name: expectedArialLabel,
        });

        await userEvent.click(button);

        expect(window.location.pathname).toBe(expectedPath);
      });
    });
  });
});
