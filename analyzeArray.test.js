const analyzeArr = require("./analyzeArray.js");

test("analyzeArray function works", () => {
  expect(analyzeArr([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
