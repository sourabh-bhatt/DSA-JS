function transpose(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let transposed = [];
  for (let i = 0; i < col; i++) {
    transposed.push([]);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      transposed[j].push(matrix[i][j]);
    }
  }
  return transposed;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let transposed = transpose(matrix);
console.log(transposed);
