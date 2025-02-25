function solve(v1, v2) {

    let sum = 0;
    let numbers = ' ';

    for (let index = v1; index <= v2; index++) {
        numbers += index + ' ';
        sum += index;
    }

    console.log(`${numbers}`);
    console.log(`Sum: ${sum}`);

}
solve(5, 10);
console.log("------------------------------------");
solve(0, 26);
console.log("------------------------------------");
solve(50, 60);