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

    test("Then it should show a 'A showcase full of figures'", () => {
      const expectedAlternativeText = "A showcase full of figures";

      renderWithProviders(<MainHeader />);

      const image = screen.getByRole("img", { name: expectedAlternativeText });

      expect(image).toBeInTheDocument();
    });
  });
});
