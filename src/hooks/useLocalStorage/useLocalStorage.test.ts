import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

describe("Given the setToken and getToken functions", () => {
  describe("When invoked to save a token", () => {
    test("Then it should be able to access the token at the localStorage", () => {
      const key = "token";
      const value = "tokenStorage";

      const {
        result: {
          current: { getToken, setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      expect(getToken(key)).toStrictEqual(value);
    });
  });
});
