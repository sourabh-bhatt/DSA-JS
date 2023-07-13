function generateMatrix(n) {
  const matrix = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  let counter = 1;
  let startRow = 0,
    endRow = n - 1;
  let startCol = 0,
    endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Traverse Right
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow++;

    // Traverse Down
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter++;
    }
    endCol--;

    // Traverse Left
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter++;
    }
    endRow--;

    // Traverse Up
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter++;
    }
    startCol++;
  }
  return matrix;
}
const n = 3;
const result = generateMatrix(n);
console.log(result);
