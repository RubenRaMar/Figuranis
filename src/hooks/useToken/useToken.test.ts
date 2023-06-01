import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { userDataLoginMock } from "../../mocks/user/userMocks";
import { userTokenMock } from "../../mocks/user/userMocks";

describe("Given a getLoginToken function", () => {
  describe("When it receives a token", () => {
    test("Then it should an user data and a token", () => {
      const token = userTokenMock;

      const {
        result: {
          current: { getDecodeToken },
        },
      } = renderHook(() => useToken());

      const userLoginData = getDecodeToken(token);

      expect(userLoginData).toStrictEqual(userDataLoginMock);
    });
  });
});
