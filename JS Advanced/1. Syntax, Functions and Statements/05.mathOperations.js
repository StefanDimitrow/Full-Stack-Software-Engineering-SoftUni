function solve(n1, n2, str) {
  let result = 0;
  switch (str) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
    case "%":
      result = n1 % n2;
      break;
    case "**":
      result = n1 ** n2;
      break;
    default:
      break;
  }
  console.log(result);
}
solve(5, 6, "+");
console.log("--------------------");
solve(3, 5.5, "*");
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
