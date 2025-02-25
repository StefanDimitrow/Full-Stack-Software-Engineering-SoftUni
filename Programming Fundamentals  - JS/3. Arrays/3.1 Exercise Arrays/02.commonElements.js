function solve(arr1, arr2){

    for (let i = 0; i < arr1.length; i++) {

        let currentElement = arr1[i];

        if (arr2.includes(currentElement)) {
            console.log(currentElement);
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
console.log("------------------------------------");
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);
console.log("------------------------------------");
solve();