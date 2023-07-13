function arraysIntersection(arr1, arr2, arr3) {
  let i = 0,
    j = 0,
    k = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  return result;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 7, 9];
let arr3 = [1, 3, 4, 5, 8];
let result = arraysIntersection(arr1, arr2, arr3);
console.log(result);
