function solve(arr){

    let longestSequences = []
    arr.reduce((a, v) => {
        a.push(v)
        if (a.every(x => x === v)) {
            if (a.length > longestSequences.length) longestSequences = a.slice()
            return a
        } else {
            return [v]
        }
    }, [])

  console.log(longestSequences.join(' '))
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log("------------------------------------");
solve([1, 1, 1, 2, 3, 1, 3, 3]);
console.log("------------------------------------");
solve([4, 4, 4, 4]);
console.log("------------------------------------");
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);