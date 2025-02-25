function solve(n, inputArr) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(inputArr[i]);
  }

  console.log(arr.reverse().join(" "));
}
solve(3, [10, 20, 30, 40, 50]);
console.log("------------------------------------");
solve(4, [-1, 20, 99, 5]);
console.log("------------------------------------");
solve(2, [66, 43, 75, 89, 47]);
