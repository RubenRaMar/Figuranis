import { renderHook } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import App from "./App";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

describe("Given a App component", () => {
  describe("When it rendered and the user is not logged in beforehand", () => {
    test("then it should redirect the user to the loguin page", () => {
      const expectedPath = "/";

      renderWithProviders(<App />);

      expect(window.location.pathname).toBe(expectedPath);
    });
  });

  describe("When it rendered and the user is logged in", () => {
    test("then it should redirect the user to the loguin page", async () => {
      const expectedPath = "/figures";

      const key = "FIguRaniSTokeN";
      const value =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      renderWithProviders(<App />);

      expect(window.location.pathname).toBe(expectedPath);
    });
  });
});
