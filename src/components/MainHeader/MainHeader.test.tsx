import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import MainHeader from "./MainHeader";

describe("Given a MainHeader component", () => {
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

    test("Then it should show a All figures icon", () => {
      const expectedAlternativeText = "All figures icon";

      renderWithProviders(<MainHeader />);

      const logo = screen.getByRole("img", { name: expectedAlternativeText });

      expect(logo).toBeInTheDocument();
    });
  });
});
