function fishTank(input){
    let lenght = Number(input[0]);
    let depth = Number(input[1]);
    let hight = Number(input[2]);
    let percent = Number(input[3]);

    let volume = lenght * depth * hight; 
    let volumeLiters = volume / 1000;
    let spaceTaken = 17/100;
    let litersNeeded = volumeLiters * (1 - spaceTaken)
    console.log(litersNeeded);
}