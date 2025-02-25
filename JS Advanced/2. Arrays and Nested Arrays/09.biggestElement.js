function solve(arr) {
  return arr.reduce(
    (a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a),
    -Infinity
  );
}

solve([
  [20, 50, 10],
  [8, 33, 145],
]);
console.log("--------------------");
solve([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
