import { screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import GenericForm from "./GenericForm";

describe("Given a GenericForm", () => {
  const inputNumber = 1234567;

  const expectedLabelsTexts = [
    "title",
    "character",
    "franchise",
    "image (URL)",
    "manufacturer",
    "material",
    "price",
    "size",
    "weight",
    "purchased",
  ];

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

  const expectedTextButton = "Add figures";
  const handleAddFigureSubmit = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show the inputs 'title','character','franchise','image(Url)','manufacturer','material','price','size' and 'weight'", () => {
      renderWithProviders(
        <GenericForm
          actionOnClick={handleAddFigureSubmit}
          buttonClassName=""
          textButton=""
        />
      );

      expectedLabelsTexts.forEach((expectedLabelText) => {
        const input = screen.getByLabelText(expectedLabelText);

        expect(input).toBeInTheDocument();
      });
    });

    test("Then it should show a 'Add figures' button", () => {
      renderWithProviders(
        <GenericForm
          actionOnClick={handleAddFigureSubmit}
          buttonClassName=""
          textButton={expectedTextButton}
        />
      );

      const button = screen.getByRole("button", { name: expectedTextButton });

      expect(button).toBeInTheDocument();
    });

    test("Then it shoul show a disabled button", () => {
      renderWithProviders(
        <GenericForm
          actionOnClick={handleAddFigureSubmit}
          buttonClassName=""
          textButton={expectedTextButton}
        />
      );

      const button = screen.getByRole("button", { name: expectedTextButton });

      expect(button).toBeDisabled();
    });
  });

  describe("When rendering and a user types 'http://localhost:5173/add-figure' in all inputs texts fields", () => {
    test("Then the text should be written in the following fields", async () => {
      renderWithProviders(
        <GenericForm
          actionOnClick={handleAddFigureSubmit}
          buttonClassName=""
          textButton={expectedTextButton}
        />
      );

      for (const inputLabelText of inputsLabelsTexts) {
        const input = screen.getByLabelText(inputLabelText);
        await userEvent.type(input, inputText);

        expect(input).toHaveValue(inputText);
      }
    });

    describe("When rendering and a user types '1234567' in username in all inputs number fields", () => {
      test("Then the number should be written in the following fields", async () => {
        renderWithProviders(
          <GenericForm
            actionOnClick={handleAddFigureSubmit}
            buttonClassName=""
            textButton={expectedTextButton}
          />
        );

        for (const inputLabelNumber of inputsLabelsNumbers) {
          const input = screen.getByLabelText(inputLabelNumber);
          await userEvent.type(input, inputNumber.toString());

          expect(input).toHaveValue(inputNumber);
        }
      });

      describe("When is rendered and the user fills the form and submits", () => {
        test("Then it should call the actionOnClick function", async () => {
          renderWithProviders(
            <GenericForm
              actionOnClick={handleAddFigureSubmit}
              buttonClassName={expectedTextButton}
              textButton={expectedTextButton}
            />
          );

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

          expect(handleAddFigureSubmit).toHaveBeenCalled();
        });
      });
    });
  });
});
