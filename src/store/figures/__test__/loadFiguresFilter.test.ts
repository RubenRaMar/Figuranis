import { initialFiguresStateMock } from "../../../mocks/figures/figuresMocks";
import { FiguresStateStructure } from "../../../types";
import {
  figureReducer,
  initialFiguresState,
  loadFiguresFilterActionCreator,
} from "../figureSlice";

describe("Given a loadFiguresFilter mini reducer", () => {
  describe("When it is invoked and the filter is not displayed", () => {
    test("Then he should change the filter status", () => {
      const expectedFiguresState: FiguresStateStructure = {
        ...initialFiguresStateMock,
        filter: !initialFiguresStateMock.filter,
      };

      const figuresState = figureReducer(
        initialFiguresState,
        loadFiguresFilterActionCreator()
      );

      expect(figuresState).toStrictEqual(expectedFiguresState);
    });
  });
});
