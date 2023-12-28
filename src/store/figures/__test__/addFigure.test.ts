import { figureMockFactory } from "../../../mocks/factory/factories";
import {
  initialFiguresStateMock,
  currentFigureStateMock,
  figuresFactoryMock,
} from "../../../mocks/figures/figuresMocks";
import { FiguresDataStructures, FiguresStateStructure } from "../../../types";
import { addFigureActionCreator, figureReducer } from "../figureSlice";

describe("Given a addFigure mini reducer", () => {
  describe("When it is invoked with a figure", () => {
    test("Then it should the add figure to the list of figures", () => {
      const figures: FiguresDataStructures[] = figuresFactoryMock;
      const figure: FiguresDataStructures = figureMockFactory();
      const expectedFiguresState: FiguresStateStructure = {
        ...initialFiguresStateMock,
        figuresData: [...figures, figure],
      };

      const addFigureAction = addFigureActionCreator(figure);
      const figureState = figureReducer(
        currentFigureStateMock,
        addFigureAction
      );

      expect(figureState).toStrictEqual(expectedFiguresState);
    });
  });
});
