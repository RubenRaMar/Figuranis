import {
  figureMockFactory,
  figuresMocksFactory,
} from "../../../mocks/factory/factories";
import { FiguresStateStructure } from "../../../types";
import { addFigureActionCreator, figureReducer } from "../figureSlice";

describe("Given a addFigure mini reducer", () => {
  describe("When it is invoked with a figure", () => {
    test("Then it should the add figure to the list of figures", () => {
      const figuresList = figuresMocksFactory(4);
      const figure = figureMockFactory();

      const currentState = {
        figuresData: [],
        figureData: {
          id: "",
          user: "",
          title: "",
          character: "",
          franchise: "",
          purchased: false,
          manufacturer: "",
          material: "",
          size: 0,
          weight: 0,
          price: 0,
          image: "",
        },
        length: 0,
        filter: false,
      };

      const figureData: FiguresStateStructure = {
        ...currentState,
        figuresData: figuresList,
      };

      const figures = figureReducer(figureData, addFigureActionCreator(figure));

      figuresList.push(figure);

      expect(figures).toStrictEqual({
        ...currentState,
        figuresData: figuresList,
      });
    });
  });
});
