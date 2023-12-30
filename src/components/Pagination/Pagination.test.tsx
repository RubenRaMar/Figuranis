import { vi } from "vitest";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { currentFigureStateMock } from "../../mocks/figures/figuresMocks";

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
        />,
        {
          ui: {
            isLoading: false,
            modal: {
              isError: false,
              isModal: false,
              message: "tot be",
              image: {
                src: "",
                alt: "",
              },
            },
            pagination: {
              page: 2,
              totalFiguresToShow: 12,
            },
          },
          figure: {
            ...currentFigureStateMock,
            totalFigures: currentFigureStateMock.figuresData.length,
          },
        }
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
        />,
        {
          ui: {
            isLoading: false,
            modal: {
              isError: false,
              isModal: false,
              message: "tot be",
              image: {
                src: "",
                alt: "",
              },
            },
            pagination: {
              page: 0,
              totalFiguresToShow: 12,
            },
          },
          figure: {
            ...currentFigureStateMock,
            totalFigures: currentFigureStateMock.figuresData.length,
          },
        }
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(button).toBeInTheDocument();
      expect(actionOnNextButton).toHaveBeenCalled();
    });
  });
});
