function max_product_of_three(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return Math.max(
    nums[0] * nums[1] * nums[n - 1],
    nums[n - 1] * nums[n - 2] * nums[n - 3]
  );
}
const nums = [1, 2, 3];
const result = max_product_of_three(nums);
console.log(result);
