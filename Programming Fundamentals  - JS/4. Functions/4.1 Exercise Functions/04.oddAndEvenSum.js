function solve(num){

    let numToString = num.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let currentNum = Number(numToString[i]);
        if(currentNum % 2 === 0){
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
        
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(1000435);
console.log("------------------------------------");
solve(3495892137259234);
console.log("------------------------------------");
solve();