const reverse = require("./reverseString.js");

test("reversed the string", () => {
  expect(reverse("hello")).toBe("olleh");
});
