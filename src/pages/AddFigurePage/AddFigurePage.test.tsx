import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import AddFiguresPage from "./AddFigurePage";

describe("Given a AddFiguresPage component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with a 'Add your favorite figure'", () => {
      const expectedAltText = "Add your favorite figure";

      renderWithProviders(<AddFiguresPage />);

      const heading = screen.getByRole("heading", { name: expectedAltText });

      expect(heading).toBeInTheDocument();
    });
  });
});
