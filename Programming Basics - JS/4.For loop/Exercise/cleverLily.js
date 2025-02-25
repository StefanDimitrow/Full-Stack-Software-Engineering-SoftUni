function cleverLily(input) {
    let ageLily = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToy = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= ageLily; currentAge++) {
        if (currentAge % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney++;
        } else {
            toysCounter++;
        }
    }


    let totalMoneyToys = priceToy * toysCounter;
    let totalSavedMoney = totalMoneyToys + savedMoney - stolenMoney;

    if (totalSavedMoney >= priceWashingMachine) {
        console.log(`Yes! ${(totalSavedMoney - priceWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashingMachine - totalSavedMoney).toFixed(2)}`);
    }

}
cleverLily(["10", "170.00", "6"])
