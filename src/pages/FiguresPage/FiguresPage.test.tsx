import { render, screen } from "@testing-library/react";
import FiguresPage from "./FiguresPage";

describe("Given a FiguresPage component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with a 'Your favorite figures'", () => {
      const expectedAltText = "Your favorite figures";

      render(<FiguresPage />);

      const heading = screen.getByRole("heading", { name: expectedAltText });

      expect(heading).toBeInTheDocument();
    });
  });
});
