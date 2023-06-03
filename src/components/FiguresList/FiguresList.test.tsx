import { screen } from "@testing-library/react";
import { figuresMocksFactory } from "../../mocks/factory/factories";
import { renderWithProviders } from "../../utils/testUtils";
import FiguresList from "./FiguresList";

describe("Given a FiguresList component", () => {
  describe("When it rendered", () => {
    test("Then it show a card title with a heading ", () => {
      const figuresMockList = figuresMocksFactory(2);

      renderWithProviders(<FiguresList />, {
        figure: { figuresData: figuresMockList },
      });

      const heading = screen.getByRole("heading", {
        name: figuresMockList[0].franchise,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
