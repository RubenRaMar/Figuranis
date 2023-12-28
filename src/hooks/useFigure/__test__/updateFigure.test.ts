import { renderHook } from "@testing-library/react";
import { figureMockFactory } from "../../../mocks/factory/factories";
import { handlers, errorHandlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import { store } from "../../../store";
import { modalsMessage } from "../../../utils/modalsData/modalsData";
import { wrapWithProviders } from "../../../utils/testUtils";
import useFigures from "../useFigure";

describe("Given a updateFigure custom hook", () => {
  const figure = figureMockFactory();

  describe("When it invoked with a valid figure", () => {
    test("Then it should show a modal with the text 'The fields that have been successfully changed have been modified'", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { updateFigure },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await updateFigure(figure);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(modalsMessage.modifyCorrect);
    });
  });

  describe("When it invoked with a invalid figure", () => {
    test("Then it should show a modal with the text 'Could not add new figure to your favorites list'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { updateFigure },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await updateFigure(figure);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(modalsMessage.modifyError);
    });
  });
});
