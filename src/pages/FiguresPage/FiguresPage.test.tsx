import { screen } from "@testing-library/react";
import FiguresPage from "./FiguresPage";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "../../components/Pagination/Pagination";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Given a FiguresPage component", () => {
  const nextPage = vi.fn();
  const previousPage = vi.fn();

  describe("When it rendered", () => {
    test("Then it should show a heading with a 'Your favorite figures'", () => {
      const expectedAltText = "Your favorite figures";

      renderWithProviders(<FiguresPage />);

      const heading = screen.getByRole("heading", { name: expectedAltText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the 'next' button", () => {
    test("Then it should call the function nextPage", async () => {
      renderWithProviders(
        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
          skip={1}
          length={10}
        />
      );

      const expectedButtonText = "next";

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(nextPage).toHaveBeenCalled();
    });
  });
  describe("When it is rendered and the user clicks on the 'previous' button", () => {
    test("Then it should call the function previousPage", async () => {
      renderWithProviders(
        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
          skip={1}
          length={10}
        />
      );

      const expectedButtonText = "previous";

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(previousPage).toHaveBeenCalled();
    });
  });
});
