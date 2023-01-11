const {
  divisibleBy3,
  divisibleBy5,
  divisibleBy15,
  checkNumber,
} = require("./question1");

describe("divisible by 3", () => {
  test("should return fish if true", () => {
    expect(divisibleBy3(9)).toBe("fish");
  });
  test("should return null if false", () => {
    expect(divisibleBy3(4)).toBe(null);
  });
});
describe("check divisible by 5", () => {
  test("should return bash if true", () => {
    expect(divisibleBy5(10)).toBe("bash");
  });
  test("should return null if false", () => {
    expect(divisibleBy5(6)).toBe(null);
  });
});
describe("check divisible by 15", () => {
  test("should return fish bash if true", () => {
    expect(divisibleBy15(30)).toBe("fish bash");
  });
  test("should return null if false", () => {
    expect(divisibleBy15(21)).toBe(null);
  });
});

describe("checkNumber should result", () => {
  test("should return fish, bash and fish bash", () => {
    expect(checkNumber([3, 5, 15])).toContain("fish");
    expect(checkNumber([3, 5, 15])).toContain("bash");
    expect(checkNumber([3, 5, 15])).toContain("fish bash");
  });
});
