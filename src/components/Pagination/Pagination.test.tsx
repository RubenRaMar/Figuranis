import { vi } from "vitest";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    const actionOnNextButton = vi.fn();
    const actionOnPreviousButton = vi.fn();

    test("Then it should show a 'Previous' button", async () => {
      const expectedButtonText = "previous";

      renderWithProviders(
        <Pagination
          nextPage={actionOnNextButton}
          previousPage={actionOnPreviousButton}
          skip={1}
          length={10}
        />
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(button).toBeInTheDocument();
      expect(actionOnPreviousButton).toHaveBeenCalled();
    });

    test("Then it should show a 'next' button", async () => {
      const expectedButtonText = "next";

      renderWithProviders(
        <Pagination
          nextPage={actionOnNextButton}
          previousPage={actionOnPreviousButton}
          skip={0}
          length={1}
        />
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(button).toBeInTheDocument();
      expect(actionOnNextButton).toHaveBeenCalled();
    });
  });
});
