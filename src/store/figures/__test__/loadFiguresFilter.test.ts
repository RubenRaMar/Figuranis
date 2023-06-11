import {
  figureReducer,
  initialFiguresState,
  loadFiguresFilterActionCreator,
} from "../figureSlice";

describe("Given a loadFiguresFilter mini reducer", () => {
  describe("When it is invoked and the filter is not displayed", () => {
    test("Then he should change the filter status", () => {
      const loadFiguresFilter = figureReducer(
        initialFiguresState,
        loadFiguresFilterActionCreator()
      );

      expect(loadFiguresFilter).toStrictEqual({
        figuresData: [],
        filter: true,
      });
    });
  });
});
