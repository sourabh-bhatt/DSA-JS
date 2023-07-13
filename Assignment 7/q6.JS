function canShift(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s === goal) {
      return true;
    }
    s = s.substring(1) + s[0];
  }

  return false;
}
const s = "abcde";
const goal = "cdeab";
console.log(canShift(s, goal));
