function solve(data){

    console.log(typeof(data));
    if (typeof(data) === "number" || typeof(data) === "string") {
        console.log (data);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}
solve('Hello, JavaScript!' );
console.log("------------------------------------");
solve(18);
console.log("------------------------------------");
solve(null);