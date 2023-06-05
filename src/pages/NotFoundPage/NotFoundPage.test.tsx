import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with 'Page not found' text", async () => {
      const expectedText = "Page not found";

      renderWithProviders(<NotFoundPage />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
