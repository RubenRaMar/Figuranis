import { screen } from "@testing-library/react";
import NavegationMenu from "./NavegationMenu";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a NavegationMenu component", () => {
  describe("When it rendering", () => {
    test("Then it should show three icons", () => {
      const expectedAlternativesTexts = [
        "All figures icon",
        "Filter pending figures icon",
        "Add figures icon",
      ];

      renderWithProviders(<NavegationMenu />);

      expectedAlternativesTexts.forEach((expectedAlternativeText) => {
        const image = screen.getByRole("img", {
          name: expectedAlternativeText,
        });

        expect(image).toBeInTheDocument();
      });
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
