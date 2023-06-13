import { figureMockFactory } from "../../../mocks/factory/factories";
import { FiguresStateStructure } from "../../../types";
import { figureReducer, loadFigureByIdActionCreator } from "../figureSlice";

describe("Given a loadFigureById mini reducer", () => {
  describe("When it is invoked with a figure list", () => {
    test("Then it returns a new list figures with the old figures plus the new figures", () => {
      const figureMock = figureMockFactory();

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

      const action = loadFigureByIdActionCreator(figureMock);

      const loadFigures = figureReducer(currentState, action);

      const expectedNewState: FiguresStateStructure = {
        ...currentState,
        figureData: figureMock,
      };

      expect(loadFigures).toStrictEqual(expectedNewState);
    });
  });
});
