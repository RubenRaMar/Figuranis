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
        figuresData: [],
        filter: true,
        length: 0,
      });
    });
  });
});
