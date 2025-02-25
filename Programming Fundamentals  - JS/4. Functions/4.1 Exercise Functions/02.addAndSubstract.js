function solve(n1, n2, n3) {
  function sum(n1, n2) {
    return n1 + n2;
  }
  let sumResult = sum(n1, n2);

  function subtract(sumResult, n3) {
    return sumResult - n3;
  }

  return subtract(sumResult, n3);
}
solve(23, 6, 10);
console.log("------------------------------------");
solve(1, 17, 30);
console.log("------------------------------------");
solve(42, 58, 100);
