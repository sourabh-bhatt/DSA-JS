function findAnagrams(s, p) {
  const result = [];
  const pCount = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
  }

  let left = 0;
  let right = 0;
  let count = p.length;

  while (right < s.length) {
    if (pCount[s.charCodeAt(right) - 97] >= 1) {
      count--;
    }

    pCount[s.charCodeAt(right) - 97]--;
    right++;

    if (count === 0) {
      result.push(left);
    }

    if (right - left === p.length) {
      if (pCount[s.charCodeAt(left) - 97] >= 0) {
        count++;
      }

      pCount[s.charCodeAt(left) - 97]++;
      left++;
    }
  }

  return result;
}

const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p));
