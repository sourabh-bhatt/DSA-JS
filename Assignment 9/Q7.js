function permuteString(S) {
  const result = [];
  function backtrack(string, currentPermutation) {
    if (string.length === 0) {
      result.push(currentPermutation);
      return;
    }
    for (let i = 0; i < string.length; i++) {
      const newString = string.substring(0, i) + string.substring(i + 1);
      const newPermutation = currentPermutation + string.charAt(i);
      backtrack(newString, newPermutation);
    }
  }
  backtrack(S, "");
  return result;
}
console.log(permuteString("ABC"));
console.log(permuteString("XY"));
