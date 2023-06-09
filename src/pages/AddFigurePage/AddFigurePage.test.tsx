import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import AddFiguresPage from "./AddFigurePage";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";

describe("Given a AddFiguresPage component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with a 'Add your favorite figure'", () => {
      const expectedAltText = "Add your favorite figure";

      renderWithProviders(<AddFiguresPage />);

      const heading = screen.getByRole("heading", { name: expectedAltText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it rendered and the user submits the form", () => {
    test("Then you should call the handleAddFigureSubmit function", async () => {
      renderWithProviders(<AddFiguresPage />);
      const inputNumber = 1234567;

      const inputText = "http://mockurl.com";
      const inputsLabelsNumbers = ["size", "price", "weight"];

      const inputsLabelsTexts = [
        "title",
        "character",
        "franchise",
        "image (URL)",
        "manufacturer",
        "material",
      ];

      const expectedTextButton = /add/i;

      for (const inputLabelNumber of inputsLabelsNumbers) {
        const input = screen.getByLabelText(inputLabelNumber);
        await userEvent.type(input, inputNumber.toString());
      }

      for (const inputLabelText of inputsLabelsTexts) {
        const input = screen.getByLabelText(inputLabelText);
        await userEvent.type(input, inputText);
      }

      const addButon = screen.getByRole("button", {
        name: expectedTextButton,
      });

      const check = screen.getByLabelText("purchased");

      await userEvent.click(addButon);
      await userEvent.click(check);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(modalsMessage.addCorrect);
    });
  });
});
