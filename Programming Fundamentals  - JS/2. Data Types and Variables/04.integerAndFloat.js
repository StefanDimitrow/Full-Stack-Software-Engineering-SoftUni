function solve(n1,n2,n3){

    let sum = n1 + n2 + n3;
    sum % 1 === 0 ? 
    sum += ' -Integer' : sum += ' - Float';


    console.log(sum);


}
solve(9, 100, 1.1);
console.log("------------------------------------");
solve(100, 200, 303);
console.log("------------------------------------");
solve();