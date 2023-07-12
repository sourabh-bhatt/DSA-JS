function distributeCandies(candyType) {
  const set = new Set(candyType);

  return Math.min(set.size, candyType.length / 2);
}
const candyType = [1, 1, 2, 2, 3, 3];
const result = distributeCandies(candyType);
console.log(result);
