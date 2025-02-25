function solve(num) {

    for (let i = 1; i < num; i++) {

 

        if (num % 3 !== 0 && num % 2 !== 0 || num == 2 ) {

            console.log(true);

            break;

        } else {

            console.log(false);

            break;

        }

    }

}
solve(7);
console.log("------------------------------------");
solve(8);
console.log("------------------------------------");
solve(81);
