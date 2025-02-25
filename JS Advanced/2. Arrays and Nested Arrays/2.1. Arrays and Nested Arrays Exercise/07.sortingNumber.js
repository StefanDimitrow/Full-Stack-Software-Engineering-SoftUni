function solve(arr){

    let i = arr.length - 1
    return arr
        .sort((a, b) => a - b)
        .reduce((a, v, _, tArr) => {
            a.push(v)
            a.push(tArr[i--])
            return a
        }, [])
        .slice(0, arr.length)
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");