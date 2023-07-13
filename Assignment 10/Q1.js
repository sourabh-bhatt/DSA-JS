function isPowerOfThree(n) {
  if (n <= 0) {
    return false;
  }

  while (n > 1) {
    if (n % 3 !== 0) {
      return false;
    }
    n = n / 3;
  }

  return true;
}

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
