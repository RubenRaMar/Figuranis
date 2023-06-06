import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import {
  userMockCredentials,
  userMockIncorrectCredentials,
  userTokenMock,
} from "../../mocks/user/userMocks";
import { wrapWithProviders } from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { store } from "../../store";

describe("Given a getLoginUser funtion", () => {
  const {
    result: {
      current: { getLoginUser },
    },
  } = renderHook(() => useUser(), { wrapper: wrapWithProviders });

  describe("When it invoked with a valid user credentials 'Xavi' and 'xavi123'", () => {
    test("Then it should return a token", async () => {
      const token = await getLoginUser(userMockCredentials);

      expect(token).toStrictEqual(userTokenMock);
    });
  });

  describe("When it invoked with a incorrect credentials 'Xavi' and 'papi123'", () => {
    test("Then it should cancel the loading", async () => {
      server.resetHandlers(...errorHandlers);

      await getLoginUser(userMockIncorrectCredentials);

      const isLoading = store.getState().ui.isLoading;

      expect(isLoading).toBeFalsy();
    });
  });
});
