function minScore(nums, k) {
  nums.sort((a, b) => a - b);
  let score = nums[nums.length - 1] - nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    let min = Math.min(nums[i] + k, nums[0] + k);
    let max = Math.max(nums[i + 1] - k, nums[nums.length - 1] - k);
    score = Math.min(score, max - min);
  }
  return score;
}
const nums = [1];
const k = 0;
const result = minScore(nums, k);
console.log(result);
