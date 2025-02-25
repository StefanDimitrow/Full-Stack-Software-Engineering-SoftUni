function numbersDivisibleBy9(input) {

    let num = Number(input[0]);
    let num1 = Number(input[1]);
    let res = 0;
    let output = "";
    for (let i=num; i<=num1;i++) {
        if(i % 9 == 0) {
            res += i;
            output += i +  "\n" ;        
        }
    }
    console.log(`The sum:${res}`);
    console.log(output);
}
numbersDivisibleBy9(["100", "200"])