function solve(arr, n) {
  let result = [];

  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  return result;
}
solve(["5", "20", "31", "4", "20"], 2);
console.log("--------------------");
solve(["dsa", "asd", "test", "tset"], 2);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
