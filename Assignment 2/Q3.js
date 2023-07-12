function findLHS(nums) {
  const countMap = new Map();
  let maxLen = 0;
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  for (let [num, count] of countMap) {
    if (countMap.has(num - 1)) {
      maxLen = Math.max(maxLen, count + countMap.get(num - 1));
    }
    if (countMap.has(num + 1)) {
      maxLen = Math.max(maxLen, count + countMap.get(num + 1));
    }
  }
  return maxLen;
}
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const result = findLHS(nums);
console.log("Output:", result);
