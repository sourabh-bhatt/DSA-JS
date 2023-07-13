function backspaceCompare(s, t) {
  const processString = (str) => {
    const stack = [];

    for (let char of str) {
      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }

    return stack.join("");
  };

  const processedS = processString(s);
  const processedT = processString(t);

  return processedS === processedT;
}
const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t));
