function toyShop(input){
    let puzzle = 2.60;
    let talkingDoll = 3;
    let teddyBear = 4.10;
    let minion = 8.20;
    let truck = 2;

    let excursionPrice = Number(input[0]);
    let puzzleNumber = Number (input[1]);
    let talkingDollNumber = Number (input[2]);
    let teddyBearNumber = Number (input[3]);
    let minionNumber = Number (input[4]);
    let truckNumber = Number (input[5]);

    let money = puzzle * puzzleNumber + talkingDoll * talkingDollNumber + teddyBear * teddyBearNumber + minion * minionNumber + truck * truckNumber;
    let toyNumber = puzzleNumber + talkingDollNumber + teddyBearNumber + minionNumber + truckNumber;
    if (toyNumber >=50) {
        money = money * 0.75; //money - money* 0.25
    }
    money = money * 0.90;
    if (money >= excursionPrice) {
        let diff = money - excursionPrice;
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else { 
        let diff = excursionPrice - money;
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
    }
toyShop(["320", "8", "2", "5", "5", "1"])