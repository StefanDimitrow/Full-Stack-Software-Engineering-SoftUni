function solve(arr){

    return arr.sort((x, y) => x - y).slice(-Math.ceil(arr.length / 2))
}

solve([4, 7, 2, 5]);
console.log("--------------------");
solve([3, 19, 14, 7, 2, 19, 6]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");