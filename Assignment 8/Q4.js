function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function str2tree(s) {
  if (s === "") return null;
  let firstParen = s.indexOf("(");
  let val =
    firstParen === -1 ? parseInt(s) : parseInt(s.substring(0, firstParen));
  let root = new TreeNode(val);
  if (firstParen === -1) return root;
  let start = firstParen,
    leftParenCount = 0;
  for (let i = start; i < s.length; i++) {
    if (s.charAt(i) === "(") leftParenCount++;
    else if (s.charAt(i) === ")") leftParenCount--;
    if (leftParenCount === 0 && start === firstParen) {
      root.left = str2tree(s.substring(start + 1, i));
      start = i + 1;
    } else if (leftParenCount === 0) {
      root.right = str2tree(s.substring(start + 1, i));
    }
  }
  return root;
}
const s = "4(2(3)(1))(6(5))";
console.log(str2tree(s));
