function solve(arr){

    let sum = 0;

    for (let index = 0; index < arr.length ; index++){
        arr[index] = Number(arr[index]);
    }

    for(let num of arr){
        if(num % 2 === 0){
            sum += num;
        }
    }

    console.log(sum);
}
solve(['1','2','3','4','5','6']);
console.log("------------------------------------");
solve(['3','5','7','9']);
console.log("------------------------------------");
solve(['2','4','6','8','10']);