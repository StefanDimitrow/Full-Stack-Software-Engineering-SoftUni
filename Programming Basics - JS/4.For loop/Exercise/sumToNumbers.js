function sumToNumbers(input) {

    let n = input[0];
    let totalValue = 0;

    for (let index = 0; index < n.length; index++) {
        let currentDigit = Number(n.charAt(index));
        totalValue += currentDigit;
    }
    console.log(`The sum of the digits is :${totalValue}`);
}
sumToNumbers(["1234"])