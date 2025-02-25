function solve(arr, n) {
  
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop())
    }

    return arr.join(" ")
}
solve(["1", "2", "3", "4"], 2);
console.log("--------------------");
solve(["Banana", "Orange", "Coconut", "Apple"], 15);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
