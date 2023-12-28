import {
  initialFiguresStateMock,
  currentFigureStateMock,
  figuresFactoryMock,
} from "../../../mocks/figures/figuresMocks";
import {
  Id,
  FiguresStateStructure,
  FiguresDataStructures,
} from "../../../types";
import { deleteFigureActionCreator, figureReducer } from "../figureSlice";

describe("Given a deleteFigure mini reducer", () => {
  describe("When it is invoked with an id of a figure", () => {
    test("Then it should return a figure state without the figure", () => {
      const figures: FiguresDataStructures[] = figuresFactoryMock;
      const figuresId: Id = figures[0].id;
      const expectedFiguresState: FiguresStateStructure = {
        ...initialFiguresStateMock,
        figuresData: figures.filter((figure) => figure.id !== figuresId),
      };

      const deleteFigureAction = deleteFigureActionCreator(figuresId);
      const figureState = figureReducer(
        currentFigureStateMock,
        deleteFigureAction
      );

      expect(figureState).toStrictEqual(expectedFiguresState);
    });
  });
});
