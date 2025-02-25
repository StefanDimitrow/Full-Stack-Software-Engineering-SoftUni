function solve(month, year) {
  let result = new Date(year, month, 0).getDate();
  return result;
}
solve(1, 2012);
console.log("--------------------");
solve(2, 2021);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
