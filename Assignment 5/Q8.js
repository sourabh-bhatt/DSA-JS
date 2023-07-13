function findOriginalArray(changed) {
  const result = [];
  const seenNumbers = new Set();
  for (const num of changed) {
    if (!seenNumbers.has(num)) {
      result.push(num);
      seenNumbers.add(num * 2);
    }
  }
  if (result.length !== changed.length / 2) {
    return [];
  }
  return result;
}
const changed = [1, 3, 4, 2, 6, 8];
const originalArray = findOriginalArray(changed);
console.log(originalArray);
