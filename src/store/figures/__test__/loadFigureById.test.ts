import {
  figureMockFactory,
  figuresMocksFactory,
} from "../../../mocks/factory/factories";
import { figureReducer, loadFigureByIdActionCreator } from "../figureSlice";

describe("Given a loadFigureById mini reducer", () => {
  describe("When it is invoked with a figure list", () => {
    test("Then it returns a new list figures with the old figures plus the new figures", () => {
      const figuresMock = figuresMocksFactory(5);
      const figureMock = figureMockFactory();

      const loadFigures = figureReducer(
        { figuresData: figuresMock },
        loadFigureByIdActionCreator([figureMock])
      );

      expect(loadFigures).toStrictEqual({ figuresData: [figureMock] });
    });
  });
});
