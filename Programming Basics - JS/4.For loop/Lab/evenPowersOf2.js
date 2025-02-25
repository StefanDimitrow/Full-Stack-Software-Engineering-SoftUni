function evenPowersOf2(input){

    let n = Number(input[0]);

    for( let power =0; power <=n; power +=2){
        console.log(Math.pow(2, power));
    }
}
evenPowersOf2(["10"])