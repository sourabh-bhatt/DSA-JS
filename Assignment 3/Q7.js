function findMissingRanges(nums, lower, upper) {
  let missing = [];
  let prev = lower - 1;
  for (let i = 0; i <= nums.length; i++) {
    let curr = i < nums.length ? nums[i] : upper + 1;
    if (curr - prev >= 2) {
      missing.push([prev + 1, curr - 1]);
    }
    prev = curr;
  }
  return missing;
}
let nums = [0, 1, 3, 50, 75];
let lower = 0;
let upper = 99;
let missingRanges = findMissingRanges(nums, lower, upper);
console.log(missingRanges);
