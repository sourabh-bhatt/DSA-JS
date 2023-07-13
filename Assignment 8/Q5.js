function compress(chars) {
  let index = 0;
  let i = 0;

  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }

    chars[index++] = chars[i];

    if (j - i > 1) {
      let count = j - i;
      chars[index++] = count.toString();
    }

    i = j;
  }

  return index;
}
let chars = ["a", "a", "b", "b", "c", "c", "c"];
let length = compress(chars);
console.log(length);
console.log(chars.slice(0, length));
