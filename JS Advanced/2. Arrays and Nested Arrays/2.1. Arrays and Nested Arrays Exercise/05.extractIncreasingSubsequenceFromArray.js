function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr.reduce((a, v) => {
      if (v >= (a[a.length - 1] || arr[0])) {
        a.push(v);
      }
      return a;
    }, []);
  }
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log("--------------------");
solve([1, 2, 3, 4, 6, 1]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
