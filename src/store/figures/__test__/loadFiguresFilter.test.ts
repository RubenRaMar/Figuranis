import { initialFiguresStateMock } from "../../../mocks/figures/figuresMocks";
import { FiguresStateStructure } from "../../../types";
import {
  figureReducer,
  initialFiguresState,
  loadFiguresIsPurchasedActionCreator,
} from "../figureSlice";

describe("Given a loadFiguresIsPurchased mini reducer", () => {
  describe("When it is invoked and the isPurchased is not displayed", () => {
    test("Then he should change the isPurchased status", () => {
      const expectedFiguresState: FiguresStateStructure = {
        ...initialFiguresStateMock,
        isPurchasedFilter: !initialFiguresStateMock.isPurchasedFilter,
      };

      const figuresState = figureReducer(
        initialFiguresState,
        loadFiguresIsPurchasedActionCreator()
      );

      expect(figuresState).toStrictEqual(expectedFiguresState);
    });
  });
});
