function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const quadruplets = [];
  const seen = new Set();
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        const needed = target - nums[i] - nums[j] - nums[k];
        if (seen.has(needed)) {
          quadruplets.push([nums[i], nums[j], nums[k], needed]);
          seen.delete(needed);
        }
        seen.add(nums[k]);
      }
    }
  }
  return quadruplets;
}
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
const quadruplets = fourSum(nums, target);
console.log(quadruplets);
