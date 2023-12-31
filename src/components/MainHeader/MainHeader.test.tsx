import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import MainHeader from "./MainHeader";
import { userMockCredentials } from "../../mocks/user/userMocks";
import LoginPage from "../../pages/LoginPage/LoginPage";
import userEvent from "@testing-library/user-event";
import pathList from "../../utils/pathList/pathList";
import { initialFiguresState } from "../../store/figures/figureSlice";

describe("Given a MainHeader component", () => {
  const expectedAltTextLayout = "Logout button icon";
  const expectedAltTextAllfigures =
    "A showcase with a shopping list with figurines";

  describe("When it rendering", () => {
    test("Then it should show a logo image", () => {
      const expectedAlternativeText = "Figuranis logotype";

      renderWithProviders(<MainHeader />);

      const logoFiguranis = screen.getByRole("img", {
        name: expectedAlternativeText,
      });

      expect(logoFiguranis).toBeInTheDocument();
    });

    describe("When it rendering and the user is not logged in", () => {
      test("Then it should not show the image of a showcase with a shopping list with figurines", async () => {
        renderWithProviders(<MainHeader />);

        const imageAllFigures = screen.queryByAltText(
          expectedAltTextAllfigures
        );

        expect(imageAllFigures).not.toBeInTheDocument();
      });

      test("Then it should not show the logout button", async () => {
        renderWithProviders(<MainHeader />);

        const LayoutImage = screen.queryByAltText(expectedAltTextLayout);

        expect(LayoutImage).not.toBeInTheDocument();
      });
    });

    describe("When it rendering and the user is logged", () => {
      const expectedArialsLabelsUsername = "username";
      const expectedArialsLabelsPassword = "password";
      const expectedAlternativeTextButton = "Login";
      const { username, password } = userMockCredentials;

      test("Then it should show the image of a showcase with a shopping list with figurines", async () => {
        renderWithProviders(<LoginPage />);

        const usernameInput = screen.getByLabelText(
          expectedArialsLabelsUsername
        );
        const passwordInput = screen.getByLabelText(
          expectedArialsLabelsPassword
        );
        const loginButton = screen.getByRole("button", {
          name: expectedAlternativeTextButton,
        });

        await userEvent.type(usernameInput, username);
        await userEvent.type(passwordInput, password);
        await userEvent.click(loginButton);

        renderWithProviders(<MainHeader />);

        const AllFiguresImage = screen.queryByAltText(
          expectedAltTextAllfigures
        );

        expect(AllFiguresImage).toBeInTheDocument();
      });

      test("Then it should show the Logout Button", async () => {
        renderWithProviders(<LoginPage />);

        const usernameInput = screen.getByLabelText(
          expectedArialsLabelsUsername
        );
        const passwordInput = screen.getByLabelText(
          expectedArialsLabelsPassword
        );
        const loginButton = screen.getByRole("button", {
          name: expectedAlternativeTextButton,
        });

        await userEvent.type(usernameInput, username);
        await userEvent.type(passwordInput, password);
        await userEvent.click(loginButton);

        renderWithProviders(<MainHeader />);

        const LogoutButton = screen.queryByAltText(expectedAltTextLayout);

        expect(LogoutButton).toBeInTheDocument();
      });
    });

    describe("When it renderd with a logged user and he click on the Loyout button", () => {
      test("Then it should redirect the user to LoginPage", async () => {
        const expectedPath = `${pathList.user}${pathList.login}`;
        const expectedArialLabel = "Logout button";

        renderWithProviders(<MainHeader />, {
          figure: { ...initialFiguresState, isPurchasedFilter: true },
          user: {
            id: "123456",
            username: "Xavi",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTYiLCJuYW1lIjoiWGF2aSJ9.mnjzr5sUVS-ot7dK31LmaAoPnZPuzNtqvepmo_9dn4I",
            isLogged: true,
          },
        });

        const layoutButton = screen.getByRole("button", {
          name: expectedArialLabel,
        });

        await userEvent.click(layoutButton);

        expect(location.pathname).toBe(expectedPath);
      });
    });
  });
});
