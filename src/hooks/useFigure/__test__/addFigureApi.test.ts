import { renderHook } from "@testing-library/react";
import useFigures from "../useFigure";
import { wrapWithProviders } from "../../../utils/testUtils";
import { figuresMock } from "../../../mocks/figures/figuresMocks";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { store } from "../../../store";
import { modalsMessage } from "../../../utils/modalsMessage/modalsMessage";
import { figureMockFactory } from "../../../mocks/factory/factories";

describe("Given a addFigureApi custom hook", () => {
  describe("When it invoked with a valid figure", () => {
    test("Then it shoud return a the figure created", async () => {
      server.resetHandlers(...handlers);

      const figure = figureMockFactory();

      const {
        result: {
          current: { addFigureApi },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const figures = await addFigureApi(figure);

      expect(figures).toStrictEqual(figuresMock);
    });
  });

  describe("When it invoked with a invalid figure", () => {
    test("Then it should show a modal with the text 'Could not add new figure to your favorites list'", async () => {
      server.resetHandlers(...errorHandlers);
      const figure = figureMockFactory();

      const {
        result: {
          current: { addFigureApi },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await addFigureApi(figure);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(modalsMessage.addError);
    });
  });
});
