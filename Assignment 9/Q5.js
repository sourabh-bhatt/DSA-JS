function findMax(arr, n) {
  if (n === 1) return arr[0];
  return Math.max(arr[n - 1], findMax(arr, n - 1));
}
const arr = [1, 4, 3, -5, -4, 8, 6];
const arr2 = [1, 4, 45, 6, 10, -8];
const n = arr.length;
const n2 = arr2.length;
const max = findMax(arr, n);
const max2 = findMax(arr2, n2);
console.log(max);
console.log(max2);
