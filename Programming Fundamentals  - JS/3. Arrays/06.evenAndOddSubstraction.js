function solve(arr){

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    for (const num of arr) {
        if(num % 2 === 0){
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);

}
solve([1,2,3,4,5,6]);
console.log("------------------------------------");
solve([3,5,7,9] );
console.log("------------------------------------");
solve([2,4,6,8,10] );