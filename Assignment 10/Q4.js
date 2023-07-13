function calculateStringLength(str) {
  if (str === "") {
    return 0;
  }
  return 1 + calculateStringLength(str.slice(1));
}
console.log(calculateStringLength("abcd"));
console.log(calculateStringLength("GEEKSFORGEEKS"));
