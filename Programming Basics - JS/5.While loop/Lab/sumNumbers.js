function sumNumbers(input) {

    let total = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (index < input.length) {
        sum = sum + Number(input[index])
        if (sum >= total){
            break;
        }
        index++;

    }
    console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"])