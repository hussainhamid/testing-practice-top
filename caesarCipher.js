function ceaserCipher(value, key) {
  return value
    .split("")
    .map((char) => shiftChar(char, key))
    .join("");

  function shiftChar(char, key) {
    if (/[a-zA-z]/.test(char)) {
      const alphaStart = char >= "a" ? "a".charCodeAt(0) : "A".charCodeAt(0);
      const alphaSize = 26;

      return String.fromCharCode(
        char.charCodeAt(0) - alphaStart + (key % alphaSize) + alphaStart
      );
    }

    return char;
  }
}

module.exports = ceaserCipher;
