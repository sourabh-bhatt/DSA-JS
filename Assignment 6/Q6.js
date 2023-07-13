function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) return [];
  changed.sort((a, b) => a - b);
  const original = [];
  const freq = {};
  for (let num of changed) {
    if (freq[num] > 0) {
      freq[num]--;
      original.push(num / 2);
    } else {
      freq[num * 2] = (freq[num * 2] || 0) + 1;
    }
  }
  return original.length === changed.length / 2 ? original : [];
}
const changed = [1, 3, 4, 2, 6, 8];
const original = findOriginalArray(changed);
console.log(original);
