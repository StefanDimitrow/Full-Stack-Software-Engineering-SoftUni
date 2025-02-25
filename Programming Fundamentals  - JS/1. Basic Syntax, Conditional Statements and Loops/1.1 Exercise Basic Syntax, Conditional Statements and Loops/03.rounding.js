function solve(number, precision) {
    let a = Number(number);
    let b = Number(precision);

    if (b > 15) {
        b = 15;
    }

    a = a.toFixed(b);
    console.log(parseFloat(a));
}
solve(3.1415926535897932384626433832795, 2);
console.log("------------------------------------");
solve(10.5, 3);
console.log("------------------------------------");
solve();