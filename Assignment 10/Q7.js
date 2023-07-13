function printPermutations(str) {
  const n = str.length;
  const visited = Array(n).fill(false);
  const permutation = Array(n);

  function dfs(index) {
    if (index === n) {
      console.log(permutation.join(""));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        permutation[index] = str[i];
        dfs(index + 1);
        visited[i] = false;
      }
    }
  }

  dfs(0);
}

printPermutations("cd");
console.log("---------");
printPermutations("abb");
