function solve(number){

    let sum = 0;
    for(let i = 1; i <= number/2; i++){
        if(number % i === 0){
            sum += i;
        }
    }

    if (sum === number && number !== 1 ){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }

}
solve(6);
console.log("------------------------------------");
solve(28);
console.log("------------------------------------");
solve(1236498);