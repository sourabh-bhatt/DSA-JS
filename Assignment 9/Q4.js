function power(N, P) {
  if (P === 0) {
    return 1;
  } else {
    return N * power(N, P - 1);
  }
}
console.log(power(5, 2));
console.log(power(2, 5));
