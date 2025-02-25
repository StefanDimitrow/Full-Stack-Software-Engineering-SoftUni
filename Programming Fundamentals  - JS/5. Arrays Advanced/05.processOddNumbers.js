function solve(arr)
{
let result = arr
    .filter((arr, x) => x % 2 == 1)
    .map(x => 2 * x)
    .reverse();
console.log(result.join(' '));
}

solve([10, 15, 20, 25]);
console.log("------------------------------------");
solve([3, 0, 10, 4, 7, 3]);
console.log("------------------------------------");
solve();