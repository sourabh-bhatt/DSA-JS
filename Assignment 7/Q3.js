function addStrings(num1, num2) {
  let sum = "";
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

    const digitSum = digit1 + digit2 + carry;
    sum = (digitSum % 10) + sum;
    carry = Math.floor(digitSum / 10);

    i--;
    j--;
  }

  return sum;
}
const num1 = "11";
const num2 = "123";
console.log(addStrings(num1, num2));
