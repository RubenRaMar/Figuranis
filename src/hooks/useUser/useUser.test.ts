import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import {
  userMockCredentials,
  userMockIncorrectCredentials,
  userTokenMock,
} from "../../mocks/user/userMocks";
import { wrapWithProviders } from "../../utils/testUtils";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";

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
    test("Then it should retunt a 'Wrong credentials' message", () => {
      const expectedError = new Error(modalsMessage.wrongCredentials);

      const response = getLoginUser(userMockIncorrectCredentials);

      expect(response).rejects.toThrowError(expectedError);
    });
  });
});
