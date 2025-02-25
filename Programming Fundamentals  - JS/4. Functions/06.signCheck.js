function solve(numOne, numTwo, numThree){

      let positive = 0;
    let negative = 0;
    numOne >= 0 ? positive++ : negative++;
    numTwo >= 0 ? positive++ : negative++;
    numThree >= 0 ? positive++ : negative++;

     if (negative === 0) {
        console.log("Positive");
    } else if (negative === 1) {
        console.log("Negative");
    } else if (negative === 2) {
        console.log("Positive");
    } else if (negative === 3) {
        console.log("Negative");
    }
}
solve(5,12,-15);
console.log("------------------------------------");
solve(-6,-12,14);
console.log("------------------------------------");
solve(-1,-2,-3);
console.log("------------------------------------");
solve(-5,1,1);