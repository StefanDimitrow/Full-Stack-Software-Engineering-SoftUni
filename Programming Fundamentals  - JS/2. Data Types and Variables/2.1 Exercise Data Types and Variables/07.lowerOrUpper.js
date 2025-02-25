function solve(input){

    let caseResult = ``;

    if(input === input.toUpperCase()) {
        caseResult = `upper-case`;
    } else { 
        caseResult = `lower-case`;
    }
    console.log(caseResult);


}
solve('L');
console.log("------------------------------------");
solve('f');
console.log("------------------------------------");
solve();