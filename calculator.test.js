const calculator = require("./calculator.js");

test("adds two input", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts two input", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("multiplies two input", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("divides two input", () => {
  expect(calculator.divide(3, 2)).toBeGreaterThanOrEqual(1);
});
