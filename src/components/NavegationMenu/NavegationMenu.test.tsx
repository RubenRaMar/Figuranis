import { screen } from "@testing-library/react";
import NavegationMenu from "./NavegationMenu";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a NavegationMenu component", () => {
  describe("When it rendering", () => {
    test("Then it should show two links", () => {
      const expectedAlternativesTexts = [
        "All figures icon",
        "Add figures icon",
      ];

      renderWithProviders(<NavegationMenu />);

      expectedAlternativesTexts.forEach((expectedAlternativeText) => {
        const link = screen.getByRole("link", {
          name: expectedAlternativeText,
        });

        expect(link).toBeInTheDocument();
      });
    });

    test("Then it should show a button with the 'Pending figures icon' text", () => {
      const expectedAlternativeText = "Pending figures icon";

      renderWithProviders(<NavegationMenu />);

      const button = screen.getByRole("button", {
        name: expectedAlternativeText,
      });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show the 'All', 'Pending', and 'Add' texts", () => {
      const expectedTexts = ["All", "Pending", "Add"];

      renderWithProviders(<NavegationMenu />);

      expectedTexts.forEach((expectedText) => {
        const text = screen.getByText(expectedText);

        expect(text).toBeInTheDocument();
      });
    });
  });
});
