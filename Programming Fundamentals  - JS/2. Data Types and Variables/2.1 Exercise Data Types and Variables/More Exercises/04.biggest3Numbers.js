function solve(n1,n2,n3){

    if(n1 > n2 && n1 > n3){
        console.log(n1);
    } else if (n2 > n1 && n2 > n3){
        console.log(n2);
    } else if (n3 > n1 && n3 > n2){
        console.log(n3);
    }


}
solve(-2,
    7,
    3
    );
console.log("------------------------------------");
solve(130,
    5,
    99
    );
console.log("------------------------------------");
solve(43,
    43.2,
    43.1
    );