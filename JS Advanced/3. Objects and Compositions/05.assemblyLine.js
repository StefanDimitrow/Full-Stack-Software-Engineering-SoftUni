function solve(arr) {

    let res = {};

    for(let i=0;i < arr.length; i+=2){
        let key = arr[i];
        let value = arr[i+1]; 
        res[key] = Number(value);
        
    }
console.log(res);
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
console.log("--------------------");
solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
