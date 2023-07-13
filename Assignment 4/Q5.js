function arrangeCoins(n) {
  let rows = 0;
  let coinsUsed = 0;
  while (coinsUsed <= n) {
    rows++;
    coinsUsed += rows;
  }
  return rows - 1;
}
let n = 5;
let result = arrangeCoins(n);
console.log(result);
