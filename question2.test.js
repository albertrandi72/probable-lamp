const { sortAsc, sortDesc } = require("./question2");

describe("sort", () => {
  test("should sort number ascending", () => {
    expect(sortAsc([3, 5, 1, 4, 2])).toStrictEqual([1, 2, 3, 4, 5]);
  });
  test("should sort number descending", () => {
    expect(sortDesc([3, 5, 1, 4, 2])).toStrictEqual([5, 4, 3, 2, 1]);
  });
});
