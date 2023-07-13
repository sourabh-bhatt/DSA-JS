function findDistinctIntegers(nums1, nums2) {
  const result = [[], []];
  for (const num of nums1) {
    if (!nums2.includes(num)) {
      result[0].push(num);
    }
  }
  for (const num of nums2) {
    if (!nums1.includes(num)) {
      result[1].push(num);
    }
  }
  return result;
}
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const distinctIntegers = findDistinctIntegers(nums1, nums2);
console.log(distinctIntegers);
