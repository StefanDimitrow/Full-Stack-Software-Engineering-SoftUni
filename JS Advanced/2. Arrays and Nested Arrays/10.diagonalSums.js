function solve(arr){

    const calcDiagonal = arr => arr.reduce((a, v, i) => a + v[i], 0)

    return `${calcDiagonal(arr)} ${calcDiagonal(arr.reverse())}`

}
solve([[20, 40],]);
console.log("--------------------");
solve([[10, 60]]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");