function solve(arg) {
  let result;
  let argType = typeof arg;

  if (argType === "number") {
    result = Math.pow(arg, 2) * Math.PI;
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${argType}.`);
  }
}
solve(5);
console.log("--------------------");
solve("name");
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
