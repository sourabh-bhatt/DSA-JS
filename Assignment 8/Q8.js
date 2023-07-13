function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    const set = new Set(s);
    return set.size < s.length;
  }

  const diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
  }

  return (
    diff.length === 2 &&
    s[diff[0]] === goal[diff[1]] &&
    s[diff[1]] === goal[diff[0]]
  );
}
const s = "ab";
const goal = "ba";
console.log(buddyStrings(s, goal));
