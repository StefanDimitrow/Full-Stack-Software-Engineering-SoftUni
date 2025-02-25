function solve(array){

    for (let index = 0; index < array.length; index++) {

        let numberAsString = array[index].toString();
        let reversedNumber = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedNumber) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
solve([123,323,421,121]);
console.log("------------------------------------");
solve([32,2,232,1010]);
console.log("------------------------------------");
solve();