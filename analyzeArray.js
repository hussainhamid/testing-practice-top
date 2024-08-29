function analyzeArr(arr) {
  const sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArr;
