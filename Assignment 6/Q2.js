function searchMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = matrix[Math.floor(mid / cols)][mid % cols];
    if (midVal === target) {
      return true;
    } else if (midVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
const found = searchMatrix(matrix, target);
console.log(found);
