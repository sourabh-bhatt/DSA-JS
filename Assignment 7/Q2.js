function isStrobogrammatic(num) {
  const map = new Map([
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ]);

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const leftDigit = num[left];
    const rightDigit = num[right];

    if (!map.has(leftDigit) || map.get(leftDigit) !== rightDigit) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
const num = "69";
console.log(isStrobogrammatic(num));
