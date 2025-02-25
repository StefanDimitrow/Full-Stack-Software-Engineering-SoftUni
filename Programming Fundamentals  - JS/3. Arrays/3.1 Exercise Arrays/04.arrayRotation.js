function solve(array,rotations){

    for (let i = 1; i <= rotations; i++) {
        
        let firstElement = array.shift();
        array.push(firstElement);
    }

    console.log(array.join(" "));
}
solve([51, 47, 32, 61, 21], 2 );
console.log("------------------------------------");
solve([32, 21, 61, 1], 4);
console.log("------------------------------------");
solve([2, 4, 15, 31], 5);