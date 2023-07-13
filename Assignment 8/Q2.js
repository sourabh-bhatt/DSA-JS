function isValid(s) {
  let countOpen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      countOpen++;
    } else if (s[i] === ")") {
      countOpen--;
    } else if (s[i] === "*") {
      if (countOpen < 0) {
        return false;
      } else {
        countOpen--;
      }
    }
  }
  return countOpen === 0;
}

const s = "()";
const result = isValid(s);
console.log(result);
