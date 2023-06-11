import { screen } from "@testing-library/react";
import NavegationMenu from "./NavegationMenu";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";

describe("Given a NavegationMenu component", () => {
  const expectedAlternativeText = "Pending figures icon";

  describe("When it is rendered", () => {
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

  describe("When it is rendered and in the addFigures page", () => {
    test("Then it should the link image to be blue", async () => {
      const expectedLabelText = "Add figures icon";
      const expectedLabelTextBlue = "Add figures icon blue";

      renderWithProviders(<NavegationMenu />);

      const link = screen.getByRole("link", { name: expectedLabelText });

      await userEvent.click(link);

      const linkBlue = screen.getByRole("link", {
        name: expectedLabelTextBlue,
      });

      expect(linkBlue).toBeInTheDocument();
    });
  });

  describe("When it is renderd and user click on the button 'Pending figures icon'", () => {
    test("Then it should will show you the pending figures", async () => {
      const expectedLabelText = "All figures icon";

      renderWithProviders(<NavegationMenu />);

      const link = screen.getByRole("link", { name: expectedLabelText });

      await userEvent.click(link);

      const button = screen.getByRole("button", {
        name: expectedAlternativeText,
      });

      await userEvent.click(button);

      screen.debug();

      const filter = store.getState().figure.filter;

      expect(filter).toBe(true);
    });
  });
});
