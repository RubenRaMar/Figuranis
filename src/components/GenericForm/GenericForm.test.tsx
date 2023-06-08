import { renderWithProviders } from "../../utils/testUtils";
import GenericForm from "./GenericForm";
import { figureMockFactory } from "../../mocks/factory/factories";
import { screen } from "@testing-library/react";

describe("Given a GenericForm", () => {
  const figureMock = figureMockFactory();

  describe("When it is rendered", () => {
    test("Then it should show the inputs 'title','character','franchise','image(Url)','manufacturer','material','price','size' and 'weight'", () => {
      const expectedLabelsTexts = [
        "title",
        "character",
        "franchise",
        "image(Url)",
        "manufacturer",
        "material",
        "price",
        "size",
        "weight",
        "purchased",
      ];

      renderWithProviders(
        <GenericForm buttonClassName="" textButton="" figure={figureMock} />
      );

      expectedLabelsTexts.forEach((expectedLabelText) => {
        const input = screen.getByLabelText(expectedLabelText);

        expect(input).toBeInTheDocument();
      });
    });

    test("Then it should show a 'Add figures' button", () => {
      const expectedTextButton = "Add figures";

      renderWithProviders(
        <GenericForm
          buttonClassName=""
          textButton={expectedTextButton}
          figure={figureMock}
        />
      );

      const button = screen.getByRole("button", { name: expectedTextButton });

      expect(button).toBeInTheDocument();
    });
  });
});
