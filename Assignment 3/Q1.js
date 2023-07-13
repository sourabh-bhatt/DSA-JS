function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];
  let currentSum = closestSum;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      currentSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}
const nums = [-1, 2, 1, -4];
const target = 1;
const closestSum = threeSumClosest(nums, target);
console.log(closestSum);
