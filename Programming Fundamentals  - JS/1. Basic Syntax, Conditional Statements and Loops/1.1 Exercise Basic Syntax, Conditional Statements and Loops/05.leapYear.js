function solve(y) {

    if (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }

}
solve(1984);
console.log("------------------------------------");
solve(2003);
console.log("------------------------------------");
solve(4);