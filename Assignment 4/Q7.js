function maxCount(m, n, ops) {
  let row = m;
  let col = n;
  for (let [a, b] of ops) {
    row = Math.min(row, a);
    col = Math.min(col, b);
  }
  return row * col;
}
let m = 3,
  n = 3;
let ops = [
  [2, 2],
  [3, 3],
];
let result = maxCount(m, n, ops);
console.log(result);
