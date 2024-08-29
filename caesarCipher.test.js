const ceaserCipher = require("./caesarCipher.js");

test("ceaserCipher function works fine", () => {
  expect(ceaserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
