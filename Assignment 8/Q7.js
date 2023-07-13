function decodeString(s) {
  const stack = [];
  let currentNumber = 0;
  let currentString = "";

  for (let char of s) {
    if (char === "[") {
      stack.push(currentString);
      stack.push(currentNumber);
      currentString = "";
      currentNumber = 0;
    } else if (char === "]") {
      const num = stack.pop();
      const prevString = stack.pop();
      currentString = prevString + currentString.repeat(num);
    } else if (parseInt(char) >= 0 && parseInt(char) <= 9) {
      currentNumber = currentNumber * 10 + parseInt(char);
    } else {
      currentString += char;
    }
  }

  return currentString;
}
const s = "3[a]2[bc]";
console.log(decodeString(s));
