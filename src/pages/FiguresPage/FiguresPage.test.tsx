import { screen } from "@testing-library/react";
import FiguresPage from "./FiguresPage";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a FiguresPage component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with a 'Your favorite figures'", () => {
      const expectedAltText = "Your favorite figures";

      renderWithProviders(<FiguresPage />);

      const heading = screen.getByRole("heading", { name: expectedAltText });

      expect(heading).toBeInTheDocument();
    });
  });
});
