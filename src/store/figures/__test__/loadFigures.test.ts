import { figuresMocksFactory } from "../../../mocks/factory/factories";
import {
  figureReducer,
  initialFiguresState,
  loadFiguresActionCreator,
} from "../figureSlice";

describe("Given a loadFigures mini reducer", () => {
  describe("When it is invoked with a figure list", () => {
    test("Then it returns a new list figures with the old figures plus the new figures", () => {
      const figuresMock = figuresMocksFactory(2);

      const loadFigures = figureReducer(
        initialFiguresState,
        loadFiguresActionCreator({
          figuresData: figuresMock,
          length: figuresMock.length,
        })
      );

      expect(loadFigures).toStrictEqual({
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
        figuresData: figuresMock,
        filter: false,
        length: 2,
      });
    });
  });
});
