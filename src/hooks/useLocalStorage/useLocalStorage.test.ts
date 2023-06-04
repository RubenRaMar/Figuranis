import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

describe("Given the setToken and getToken functions", () => {
  describe("When they are invoked to save and return token", () => {
    test("Then it should be able to access the token at the localStorage", () => {
      const key = "FIguRaniSTokeN";
      const value = "tokenStorage";

      const {
        result: {
          current: { getToken, setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      expect(getToken()).toStrictEqual(value);
    });
  });
});

describe("Given the remove functions", () => {
  describe("When it invoked with a token key", () => {
    test("Then it should remove the token from the store", () => {
      const key = "FIguRaniSTokeN";
      const value = "tokenStorage";

      const {
        result: {
          current: { setToken, removeToken, getToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);
      removeToken(key);

      expect(getToken()).not.toStrictEqual(value);
    });
  });
});
