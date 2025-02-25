function solve(input){

    let sumOldArr = 0;
    let sumNewArr = 0;
    let arrLength = input.length;

    for (let index = 0; index < arrLength; index++) {
        let currentNum = Number(input[index]);

        sumOldArr += currentNum;

        if (currentNum % 2 === 0) {
            currentNum += index;
        } else {
            currentNum -= index;
        }

        input[index] = currentNum;
        sumNewArr += currentNum;
    }

    console.log(input);
    console.log(sumOldArr);
    console.log(sumNewArr);

}

solve([5, 15, 23, 56, 35]);
console.log("------------------------------------");
solve([-5, 11, 3, 0, 2]);
console.log("------------------------------------");
solve();