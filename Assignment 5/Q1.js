function convert1DTo2D(array, m, n) {
  if (array.length !== m * n) {
    return [];
  }
  const result = [];
  for (let i = 0; i < m; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      result[i].push(array[i * n + j]);
    }
  }
  return result;
}
const array = [1, 2, 3, 4];
const m = 2;
const n = 2;
const result = convert1DTo2D(array, m, n);
console.log(result);
