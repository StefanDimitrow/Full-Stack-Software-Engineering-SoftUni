function solve(arr){

    let result = [];
    while(arr.length !== 0) {
        let [current, biggest] = [arr.shift(), Math.max(...arr)]
        if(current > biggest) result.push(current);
   }
   console.log(result.join(' '));
}

solve([1, 4, 3, 2] );
console.log("------------------------------------");
solve([14, 24, 3, 19, 15, 17]);
console.log("------------------------------------");
solve([41, 41, 34, 20]);
console.log("------------------------------------");
solve([27, 19, 42, 2, 13, 45, 48] );