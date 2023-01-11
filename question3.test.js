const { checkReverseText } = require("./question3");

describe("checkReversibleText", () => {
  test("should return true if text reverse", () => {
    expect(checkReverseText("abcde", "edcba")).toBe(true);
  });
  test("should return false not reverse", () => {
    expect(checkReverseText("abcde", "asdfa")).toBe(false);
  });
});
