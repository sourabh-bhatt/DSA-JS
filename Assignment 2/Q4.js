function can_plant_flowers(flowerbed, n) {
  let emptyPlots = 0;
  for (const plot of flowerbed) {
    if (plot === 0) {
      emptyPlots++;
    }
  }
  if (emptyPlots < n) {
    return false;
  }
  for (let i = 0; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 1 && flowerbed[i + 1] === 1) {
      return false;
    }
  }
  return true;
}
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const result = can_plant_flowers(flowerbed, n);
console.log(result);
