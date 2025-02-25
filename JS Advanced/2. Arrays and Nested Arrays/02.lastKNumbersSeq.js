function solve(n, k) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    arr.push(arr.slice(-k).reduce((a, v) => a + v, 0));
  }
  return arr;
}
solve(6, 3);
console.log("--------------------");
solve(8, 2);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
