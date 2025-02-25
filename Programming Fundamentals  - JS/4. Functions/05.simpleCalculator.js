function solve(num1, num2, operator) {
  switch (operator) {
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "add":
      result = num1 + num2;
      break;
    case "substract":
      result = num1 - num2;
      break;
  }
  console.log(result);
}
solve(5, 5, "multiply");
console.log("------------------------------------");
solve(40, 8, "divide");
console.log("------------------------------------");
solve(12, 19, "add");
console.log("------------------------------------");
solve(50, 13, "substract");
