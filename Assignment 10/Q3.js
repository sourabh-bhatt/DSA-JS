function subsets(set, curr = "", index = 0) {
  if (index === set.length) {
    console.log(curr);
    return;
  }
  subsets(set, curr + set[index], index + 1);
  subsets(set, curr, index + 1);
}
subsets("abc");
console.log("------------");
subsets("abcd");
