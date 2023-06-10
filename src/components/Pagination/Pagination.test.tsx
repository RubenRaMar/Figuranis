import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { screen } from "@testing-library/react";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Previous' button", () => {
      const expectedButtonText = "previous";

      renderWithProviders(<Pagination />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a 'next' button", () => {
      const expectedButtonText = "next";

      renderWithProviders(<Pagination />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
