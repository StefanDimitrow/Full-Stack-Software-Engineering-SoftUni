function footballSouvenirs(input) {

    let teamName = input[0];
    souvenirsType = input[1];
    souvenirsCount = Number(input[2]);
    let souvernirsPrice = 0;


    
    
    if (teamName == "Argentina") {
        if (souvenirsType == "flags") {
            souvernirsPrice = 3.25;
        }
        if (souvenirsType == "caps") {
            souvernirsPrice = 7.20;
        }
        if (souvenirsType == "posters") {
            souvernirsPrice = 5.10;
        }
        if (souvenirsType == "stickers") {
            souvernirsPrice = 1.25;
        }
    } else if (teamName == "Brazil") {
        if (souvenirsType == "flags") {
            souvernirsPrice = 4.20;
        }
        if (souvenirsType == "caps") {
            souvernirsPrice = 8.50;
        }
        if (souvenirsType == "posters") {
            souvernirsPrice = 5.35;
        }
        if (souvenirsType == "stickers") {
            souvernirsPrice = 1.20;
        }

    } else if (teamName == "Croatia") {
        if (souvenirsType == "flags") {
            souvernirsPrice = 2.75;
        }
        if (souvenirsType == "caps") {
            souvernirsPrice = 6.90;
        }
        if (souvenirsType == "posters") {
            souvernirsPrice = 4.95;
        }
        if (souvenirsType == "stickers") {
            souvernirsPrice = 1.10;
        }
    } else if (teamName == "Denmark") {
        if (souvenirsType == "flags") {
            souvernirsPrice = 3.10;
        }
        if (souvenirsType == "caps") {
            souvernirsPrice = 6.50;
        }
        if (souvenirsType == "posters") {
            souvernirsPrice = 4.80;
        }
        if (souvenirsType == "stickers") {
            souvernirsPrice = 0.90;
        }
    }
    let totalPrice = souvernirsPrice * souvenirsCount
    console.log(`Pepi bought ${souvenirsCount} ${souvenirsType} of ${teamName} for ${totalPrice.toFixed(2)} lv.`);

    
}
footballSouvenirs(["USA", "stickers", "5"])