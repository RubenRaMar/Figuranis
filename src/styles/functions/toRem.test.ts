import toRem from "./toRem";

describe("Given a toREm function", () => {
  describe("When it receive the number 20", () => {
    test("Then it should retun then it should return the text '1.25 rem'", () => {
      const expectedText = "1.25rem";

      const rem = toRem(20);

      expect(rem).toBe(expectedText);
    });
  });
});
