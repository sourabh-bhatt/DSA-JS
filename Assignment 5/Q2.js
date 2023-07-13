function completeRows(n) {
  let rows = 0;
  let coinsUsed = 0;
  for (let i = 1; coinsUsed <= n; i++) {
    coinsUsed += i;
    if (coinsUsed <= n) {
      rows++;
    }
  }
  return rows;
}
let n = 5;
let result = completeRows(n);
console.log(result);
