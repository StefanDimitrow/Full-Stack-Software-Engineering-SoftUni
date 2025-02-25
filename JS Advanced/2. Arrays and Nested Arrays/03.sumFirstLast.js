function solve(arr) {
    arr = arr.map(Number)
    return arr[0] + arr[arr.length - 1]
}
solve(["20", "30", "40"]);
console.log("--------------------");
solve(["5", "10"]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
