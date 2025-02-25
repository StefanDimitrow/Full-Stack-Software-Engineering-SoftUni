function solve(numberAsString){

    numberAsString = numberAsString.split("");
    let decimal = 0;
    let power = numberAsString.length - 1;    
    for (let i = 0; i < numberAsString.length; i++) {       
        decimal += Number(numberAsString[i]) * Math.pow(2, power); 
        power--; // 
    console.log(decimal);


}
}
solve(00001001);
console.log("------------------------------------");
solve(11110000);
console.log("------------------------------------");
solve();