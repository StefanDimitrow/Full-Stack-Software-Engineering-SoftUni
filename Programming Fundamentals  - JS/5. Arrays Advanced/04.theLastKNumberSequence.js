function solve(n, k){

    let arr=[1];

    while(n > arr.length){
        let kArr = arr.splice(arr.length - k);
        let sum = 0;
        for (let i = 0; i < kArr.length; i++) {
            sum += kArr[1];
        }
        arr.push(sum);
    }

    log

}
solve(6,3);
console.log("------------------------------------");
solve(8,2);
console.log("------------------------------------");
solve();