import { renderHook } from "@testing-library/react";
import { handlers, errorHandlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import { store } from "../../../store";
import { modalsMessage } from "../../../utils/modalsMessage/modalsMessage";
import { wrapWithProviders } from "../../../utils/testUtils";
import useFigures from "../useFigure";

describe("Given a deleteFigure custom hook", () => {
  describe("When it invoked with a valid figure id", () => {
    test("Then it should show a modal with the text 'The figure has been successfully removed from the favorites list'", async () => {
      server.resetHandlers(...handlers);

      const id = "709870";

      const {
        result: {
          current: { deleteFigure },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await deleteFigure(id);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(modalsMessage.removeCorrect);
    });
  });

  describe("When it invoked with a non-existent figure id", () => {
    test("Then it should show a modal with the text 'It has not been possible to remove the figure from the list'", async () => {
      server.resetHandlers(...errorHandlers);

      const id = "41f324f234f";

      const {
        result: {
          current: { deleteFigure },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await deleteFigure(id);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(modalsMessage.removeError);
    });
  });
});
