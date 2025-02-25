function solve(...args) {
  let result = 1;
  for (let i = 2; i < 9; i++) {
    result = args.every((x) => x % i === 0) ? i : result;
  }

  return result;
}
solve(15, 5);
console.log("--------------------");
solve(2154, 458);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
