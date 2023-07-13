function sortedSquares(nums) {
  let result = [];
  for (let num of nums) {
    result.push(num * num);
  }
  return result.sort((a, b) => a - b);
}
let nums = [-4, -1, 0, 3, 10];
let squaredNums = sortedSquares(nums);
console.log(squaredNums);
