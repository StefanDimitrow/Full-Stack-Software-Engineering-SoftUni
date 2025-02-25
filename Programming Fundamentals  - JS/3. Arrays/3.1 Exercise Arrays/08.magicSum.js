function solve(arr,n){

    for (let i = 0; i < arr.length - 1; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] + arr[y] === n) console.log(`${arr[i]} ${arr[y]}`)
        }
    }

}
solve([1, 7, 6, 2, 19, 23],8);
console.log("------------------------------------");
solve([14, 20, 60, 13, 7, 19, 8],27);
console.log("------------------------------------");
solve([1, 2, 3, 4, 5, 6],6);