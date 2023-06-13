import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import UpdateFigurePage from "./UpdateFigurePage";
import userEvent from "@testing-library/user-event";
import pathList from "../../utils/pathList/pathList";

describe("Given a LoginPage component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with 'Modify your figure' text", async () => {
      const expectedTest = "Modify your figure";

      renderWithProviders(<UpdateFigurePage />);

      const heading = screen.getByRole("heading", { name: expectedTest });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it rendered and the user on click in 'modify' button", () => {
    test("Then it should navibigate to /figures page", async () => {
      const expectedButtonText = "modify";

      renderWithProviders(<UpdateFigurePage />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(location.pathname).toBe(pathList.figures);
    });
  });
});
