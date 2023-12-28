import { figuresMocksFactory } from "../../../mocks/factory/factories";
import { initialFiguresStateMock } from "../../../mocks/figures/figuresMocks";
import { FiguresDataStructures, FiguresStateStructure } from "../../../types";
import {
  figureReducer,
  initialFiguresState,
  loadFiguresActionCreator,
} from "../figureSlice";

describe("Given a loadFigures mini reducer", () => {
  describe("When it is invoked with a figure list", () => {
    test("Then it returns a new list figures with the old figures plus the new figures", () => {
      const figuresMock: FiguresDataStructures[] = figuresMocksFactory(2);
      const newFigures: FiguresDataStructures[] = figuresMock;
      const newTotaFigures: number = figuresMock.length;
      const expectedFiguresState: FiguresStateStructure = {
        ...initialFiguresStateMock,
        figuresData: newFigures,
        totalFigures: newTotaFigures,
      };

      const loadFiguresAction = loadFiguresActionCreator({
        figuresData: newFigures,
        totalFigures: newTotaFigures,
      });
      const figuresState = figureReducer(
        initialFiguresState,
        loadFiguresAction
      );

      expect(figuresState).toStrictEqual(expectedFiguresState);
    });
  });
});
