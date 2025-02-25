function newHome(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let flowerPrice = 0;

    switch (flowerType) {
        case `Roses`:
            flowerPrice = flowerCount * 5;
            if (flowerCount > 80) {
                flowerPrice = flowerPrice * 0.9;
            }
            break;

        case `Dahlias`:
            flowerPrice = flowerCount * 3.8;
            if (flowerCount > 90) {
                flowerPrice = flowerPrice * 0.85;
            }
            break;

        case `Tulips`:
            flowerPrice = flowerCount * 2.8;
            if (flowerCount > 80) {
                flowerPrice = flowerPrice * 0.85;
            }
            break;
        case `Narcissus`:
            flowerPrice = flowerCount * 3;
            if (flowerCount < 120) {
                flowerPrice = flowerPrice * 1.15;
            }
            break;
        case `Gladiolus`:
            flowerPrice = flowerCount * 2.5;
            if (flowerCount < 80) {
                flowerPrice = flowerPrice * 1.20;
            }
            break;
    }
    if (budget >= flowerPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - flowerPrice).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${(flowerPrice - budget).toFixed(2)} leva more.`)
    }
    
}
newHome(["Roses", "55", "250"])
