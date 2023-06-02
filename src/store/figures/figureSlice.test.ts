import { figuresMocksFactory } from "../../mocks/factory/factories";
import {
  figureReducer,
  initialFiguresState,
  loadFiguresActionCreator,
} from "./figureSlice";

describe("Given a loadFigures mini reducer", () => {
  describe("When it invoked with a figure list", () => {
    test("Then it returns a new list figures with the old figures plus the new figures", () => {
      const figuresMock = figuresMocksFactory;

      const loadFigures = figureReducer(
        initialFiguresState,
        loadFiguresActionCreator(figuresMock)
      );

      expect(loadFigures).toStrictEqual({ figuresData: figuresMock });
    });
  });
});
