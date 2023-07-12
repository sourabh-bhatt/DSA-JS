function moveZeroes(nums) {
  let insertPos = 0;
  for (let num of nums) {
    if (num !== 0) {
      nums[insertPos++] = num;
    }
  }
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}
const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result);
