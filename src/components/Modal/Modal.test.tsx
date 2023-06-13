import { screen } from "@testing-library/react";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";
import { renderWithProviders } from "../../utils/testUtils";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";

describe("Given a Modal component", () => {
  describe("When it is rendered and receives a modal message list", () => {
    test("Then it should show all related text", () => {
      const {
        wrongCredentials,
        addCorrect,
        addError,
        modifyCorrect,
        modifyError,
        removeCorrect,
        removeError,
      } = modalsMessage;

      const expectedAltTexts = [
        wrongCredentials,
        addCorrect,
        addError,
        modifyCorrect,
        modifyError,
        removeCorrect,
        removeError,
      ];

      expectedAltTexts.forEach((expectedAltText) => {
        renderWithProviders(<Modal />, {
          ui: {
            isLoading: false,
            modal: {
              message: expectedAltText,
              isModal: true,
              error: true,
            },
            pagination: {
              limit: 1,
              skip: 1,
            },
          },
        });

        const text = screen.getByText(expectedAltText);

        expect(text).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered ", () => {
    test("Then it should show a 'An X to close' button", async () => {
      const expectedAltTextButton = "An X to close";

      renderWithProviders(<Modal />, {
        ui: {
          isLoading: false,
          modal: {
            error: false,
            message: modalsMessage.removeCorrect,
            isModal: true,
          },
          pagination: {
            limit: 1,
            skip: 1,
          },
        },
      });

      const button = screen.getByRole("button", {
        name: expectedAltTextButton,
      });

      await userEvent.click(button);

      expect(button).toBeInTheDocument();
    });
  });
});
