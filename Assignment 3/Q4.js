function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = (low + high) >>> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}
const nums = [1, 3, 5, 6];
const target = 5;
const index = binarySearch(nums, target);
console.log(index);
