import { screen } from "@testing-library/react";
import NavegationMenu from "./NavegationMenu";
import { renderWithProviders } from "../../utils/testUtils";
import Layout from "../Layout/Layout";
import userEvent from "@testing-library/user-event";

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

    test("Then a button with the text 'Pending figures icon' should not appear", () => {
      const expectedAlternativeText = "Pending figures icon";

      renderWithProviders(<NavegationMenu />);

      const button = screen.queryByRole("button", {
        name: expectedAlternativeText,
      });

      expect(button).not.toBeInTheDocument();
    });

    test("Then it should show the 'All' and 'Add' texts", () => {
      const expectedTexts = ["All", "Add"];

      renderWithProviders(<NavegationMenu />);

      expectedTexts.forEach((expectedText) => {
        const text = screen.getByText(expectedText);

        expect(text).toBeInTheDocument();
      });
    });

    test("Then the text 'Pending' should not appear.", () => {
      const expectedText = "Pending";

      renderWithProviders(<NavegationMenu />);

      const textPending = screen.queryByRole(expectedText);

      expect(textPending).not.toBeInTheDocument();
    });
  });

  describe("When this is rendered and in the addFigures page", () => {
    test("Then it should the link image to be blue", async () => {
      renderWithProviders(<Layout />);

      const expectedLabelText = "Add figures icon";
      const expectedLabelTextBlue = "Add figures icon blue";

      renderWithProviders(<NavegationMenu />);

      const link = screen.getByRole("link", { name: expectedLabelText });

      await userEvent.click(link);

      screen.debug();
      const linkBlue = screen.getByRole("link", {
        name: expectedLabelTextBlue,
      });

      expect(linkBlue).toBeInTheDocument();
    });
  });
});
