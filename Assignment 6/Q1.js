function reconstructPermutation(s) {
  const n = s.length;
  const perm = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === "I") {
      perm.push(i);
    } else {
      perm.push(n - i);
    }
  }
  perm.push(n);
  return perm;
}
const s = "IDID";
const perm = reconstructPermutation(s);
console.log(perm);
