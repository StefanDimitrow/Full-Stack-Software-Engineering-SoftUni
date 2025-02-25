function solve(arr){

    let k = arr.shift();    
    let firstK = arr.slice(0,k);
    let lastK = arr.slice(k * -1);
    
    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
}
solve([2,7, 8, 9]);
console.log("------------------------------------");
solve([3,6, 7, 8, 9]);
console.log("------------------------------------");
solve();