function solve(... args){

    let result = [];
    args.forEach((x, i) => {
        for (let j = x; j > 0; j--) {
            result[i] = j * (result[i] || 1);
        }
    })

    console.log((result[0] / result[1]).toFixed(2));

}
solve(5,2);
console.log("------------------------------------");
solve(6,2);
console.log("------------------------------------");
solve();