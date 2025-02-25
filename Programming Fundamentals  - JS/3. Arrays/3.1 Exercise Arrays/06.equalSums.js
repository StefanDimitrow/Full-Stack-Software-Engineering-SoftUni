function solve(arr){

    let index = "no"
    arr.forEach((_, i) => {
        const leftSum = arr.slice(0, i + 1).reduce((a, v) => a + v, 0)
        const rightSum = arr.slice(i).reduce((a, v) => a + v, 0)
        if (leftSum === rightSum) index = i
    })
    console.log(index);
}

solve([1, 2, 3, 3]);
console.log("------------------------------------");
solve([1, 2] );
console.log("------------------------------------");
solve([1, 2, 3]);
console.log("------------------------------------");
solve([10,5,5,99,3,4,2,5,1,1,4]);
