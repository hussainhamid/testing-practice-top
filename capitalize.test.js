const capitalizeFunc = require("./capitalize");

test("returns first letter as capitalized", () => {
  expect(capitalizeFunc("heLLo")).toBe("Hello");
});
