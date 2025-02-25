function sumDigits(number) {
    let inputAsString = number.toString();
    let sumOfDigits = 0;

    for(let index=0; index < inputAsString.length; index++){
        let currentDigit = Number (inputAsString[index]);
        sumOfDigits += currentDigit;
    }
console.log(sumOfDigits);
}
solve([20, 30, 40]);
console.log("------------------------------------");
solve([10, 17, 22, 33]);
console.log("------------------------------------");
solve([11, 58, 69]);