import { screen } from "@testing-library/react";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";
import { renderWithProviders } from "../../utils/testUtils";
import Modal from "./Modal";

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

      expectedAltTexts.forEach((expectedAltText, position) => {
        renderWithProviders(<Modal />, {
          ui: {
            isLoading: false,
            modal: {
              message: expectedAltText,
              isModal: true,
              error: !position && false,
            },
          },
        });

        const text = screen.getByText(expectedAltText);

        expect(text).toBeInTheDocument();
      });
    });
  });
});
