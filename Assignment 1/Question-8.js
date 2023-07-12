function findErrorNums(nums) {
  let dup = -1;
  let missing = -1;
  let numsSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) {
      dup = nums[i];
    } else {
      numsSet.add(nums[i]);
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!numsSet.has(i)) {
      missing = i;
      break;
    }
  }
  return [dup, missing];
}
const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // [2,3]
