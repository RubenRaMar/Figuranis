import { screen } from "@testing-library/react";
import { figureMockFactory } from "../../mocks/factory/factories";
import { renderWithProviders } from "../../utils/testUtils";
import FigureCard from "./FigureCard";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";
import { modalsMessage } from "../../utils/modalsData/modalsData";

describe("Given a FiguresList component", () => {
  describe("When it is rendered and receives one figure", () => {
    const figureMock = figureMockFactory();

    test("Then it should show a card title with a heading ", () => {
      renderWithProviders(<FigureCard position={0} figure={figureMock} />);

      figureMock.isPurchased = true;

      const heading = screen.getByRole("heading", {
        name: figureMock.franchise,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a card image", () => {
      renderWithProviders(<FigureCard position={0} figure={figureMock} />);

      figureMock.isPurchased = false;

      const image = screen.getByRole("img", {
        name: `${figureMock.title} figure`,
      });

      expect(image).toBeInTheDocument();
    });

    test("Then it should show three data texts of the figure", () => {
      const figuresData = [
        `The figure is ${figureMock.isPurchased ? "purchased" : "pending"}`,
        `The figure title is ${figureMock.title}`,
        `The figure price is ${figureMock.price} euros`,
      ];

      renderWithProviders(<FigureCard position={0} figure={figureMock} />);

      figuresData.forEach((figureData) => {
        const text = screen.getByLabelText(figureData);

        expect(text).toBeInTheDocument();
      });
    });

    describe("When it is rendered and the user clicks the 'delete-card' button", () => {
      test("Then it should be able to remove the figure", async () => {
        const expectedAtlTextButton = "delete-card";

        renderWithProviders(<FigureCard position={0} figure={figureMock} />);

        const button = screen.getByRole("button", {
          name: expectedAtlTextButton,
        });

        await userEvent.click(button);

        const message = store.getState().ui.modal.message;

        expect(message).toBe(modalsMessage.removeCorrect);
      });
    });
  });
});
