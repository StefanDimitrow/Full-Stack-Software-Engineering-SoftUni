function solve(startingYield){

    totalAmount = 0;
    let days = 0;

    while(startingYield >= 100){
        totalAmount += (startingYield - 26);
        startingYield -= 10;
        days ++;
    }

    totalAmount -= 26;
if (totalAmount < 0) {
totalAmount = 0;

}
console.log(days);
console.log(totalAmount);
}
solve(111);
console.log("------------------------------------");
solve(450);
console.log("------------------------------------");
solve();