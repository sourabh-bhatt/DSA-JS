function sparseMatrixMultiply(mat1, mat2) {
  const m = mat1.length;
  const k = mat2[0].length;
  const n = mat2[0].length;
  const result = Array(m)
    .fill()
    .map(() => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let l = 0; l < k; l++) {
        result[i][j] += mat1[i][l] * mat2[l][j];
      }
    }
  }
  return result;
}
const mat1 = [
  [1, 0, 0],
  [-1, 0, 3],
];
const mat2 = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];
const result = sparseMatrixMultiply(mat1, mat2);
console.log(result);
