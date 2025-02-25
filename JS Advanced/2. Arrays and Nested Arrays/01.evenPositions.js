function solve(arr) {
  arr = arr.filter((_, i) => i % 2 === 0);
  console.log(arr.join(" "));
}

solve(["20", "30", "40", "50", "60"]);
console.log("--------------------");
solve(["5", "10"]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
