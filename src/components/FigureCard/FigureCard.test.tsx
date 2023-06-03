import { screen } from "@testing-library/react";
import { figureMockFactory } from "../../mocks/factory/factories";
import { renderWithProviders } from "../../utils/testUtils";
import FigureCard from "./FigureCard";

describe("Given a FiguresList component", () => {
  describe("When it rendered and receives one figure", () => {
    const figureMock = figureMockFactory();

    test("Then it should show a card title with a heading ", () => {
      renderWithProviders(<FigureCard figure={figureMock} />);

      const heading = screen.getByRole("heading", {
        name: figureMock.franchise,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a card image", () => {
      renderWithProviders(<FigureCard figure={figureMock} />);

      const image = screen.getByRole("img", {
        name: `${figureMock.title} figure`,
      });

      expect(image).toBeInTheDocument();
    });

    test("Then it should show three data texts of the figure", () => {
      const figuresData = [
        `The figure is ${figureMock.purchased ? "purchased" : "pending"}`,
        `The figure title is ${figureMock.title}`,
        `The figure price is ${figureMock.price} euros`,
      ];

      renderWithProviders(<FigureCard figure={figureMock} />);

      figuresData.forEach((figureData) => {
        const text = screen.getByLabelText(figureData);

        expect(text).toBeInTheDocument();
      });
    });
  });
});
