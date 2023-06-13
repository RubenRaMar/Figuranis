import { screen, waitFor } from "@testing-library/react";
import FiguresPage from "./FiguresPage";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";

describe("Given a FiguresPage component", () => {
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
      renderWithProviders(<FiguresPage />, {
        ui: {
          isLoading: false,
          modal: { error: false, isModal: false, message: "tot be" },
          pagination: {
            skip: 1,
            limit: 1,
          },
        },
      });

      const expectedButtonText = "next";

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      waitFor(() => expect(button).toBeDisabled());
    });
  });

  describe("When it is rendered and the user clicks on the 'previous' button", () => {
    test("Then it should call the function previousPage", async () => {
      renderWithProviders(<FiguresPage />, {
        ui: {
          isLoading: false,
          modal: { error: false, isModal: false, message: "tot be" },
          pagination: {
            skip: 1,
            limit: 1,
          },
        },
      });

      const expectedButtonText = "previous";

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      waitFor(() => expect(button).toBeDisabled());
    });
  });
});
