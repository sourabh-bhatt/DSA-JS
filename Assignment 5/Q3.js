function squareAndSort(nums) {
  const squaredNums = [];
  for (const num of nums) {
    squaredNums.push(num * num);
  }
  squaredNums.sort((a, b) => a - b);
  return squaredNums;
}
const nums = [-4, -1, 0, 3, 10];
const result = squareAndSort(nums);
console.log(result);
