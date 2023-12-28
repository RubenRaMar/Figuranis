import { figureMockFactory } from "../../../mocks/factory/factories";
import { currentFigureStateMock } from "../../../mocks/figures/figuresMocks";
import { FiguresDataStructures, FiguresStateStructure } from "../../../types";
import { figureReducer, loadFigureByIdActionCreator } from "../figureSlice";

describe("Given a loadFigureById mini reducer", () => {
  describe("When it is invoked with a figure list", () => {
    test("Then it returns a new list figures with the old figures plus the new figures", () => {
      const figureMock: FiguresDataStructures = figureMockFactory();
      const expectedNewState: FiguresStateStructure = {
        ...currentFigureStateMock,
        figureData: figureMock,
      };

      const loadFigureAction = loadFigureByIdActionCreator(figureMock);
      const loadFigures = figureReducer(
        currentFigureStateMock,
        loadFigureAction
      );

      expect(loadFigures).toStrictEqual(expectedNewState);
    });
  });
});
