import { figuresMocksFactory } from "../../../mocks/factory/factories";
import { FiguresStateStructure } from "../../../types";
import { deleteFigureActionCreator, figureReducer } from "../figureSlice";

describe("Given a deleteFigure mini reducer", () => {
  describe("When it is invoked with an id of a figure", () => {
    test("Then it should delete this figure", () => {
      const figuresList = figuresMocksFactory(4);

      const figureData: FiguresStateStructure = {
        figuresData: figuresList,
      };

      const figures = figureReducer(
        figureData,
        deleteFigureActionCreator(figuresList[0].id)
      );

      figuresList.shift();

      expect(figures).toStrictEqual({ figuresData: figuresList });
    });
  });
});
