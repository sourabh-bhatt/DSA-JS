function isMountainArray(arr) {
  if (arr.length < 3) {
    return false;
  }
  let increasing = true;
  let decreasing = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      decreasing = true;
    } else if (arr[i] > arr[i - 1] && decreasing) {
      return false;
    }
  }
  return increasing && !decreasing;
}
const arr = [2, 1];
const result = isMountainArray(arr);
console.log(result);
