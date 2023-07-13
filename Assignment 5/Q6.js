function findDuplicates(nums) {
  let duplicates = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      duplicates.push(Math.abs(nums[i]));
    }
    nums[index] = -nums[index];
  }
  return duplicates;
}
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let result = findDuplicates(nums);
console.log(result);
