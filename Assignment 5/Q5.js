function distanceValue(arr1, arr2, d) {
  let distanceValue = 0;
  for (const num of arr1) {
    let found = false;
    for (const otherNum of arr2) {
      if (Math.abs(num - otherNum) <= d) {
        found = true;
        break;
      }
    }
    if (!found) {
      distanceValue++;
    }
  }
  return distanceValue;
}
const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;
const res = distanceValue(arr1, arr2, d);
console.log(res);
