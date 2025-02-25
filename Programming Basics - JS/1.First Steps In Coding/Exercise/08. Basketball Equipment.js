function basketballEquipment(input){
    let annualBasketballTrainingPrice = Number(input[0]);
    let basketballShoes = annualBasketballTrainingPrice - (annualBasketballTrainingPrice * 0.4);
    let basketballOutfit = basketballShoes - (basketballShoes * 0.2);
    let basketballBall = basketballOutfit * 0.25;
    let basketballAccessories = basketballBall * 0.20;
    let totalPriceBasketballEquipments = annualBasketballTrainingPrice + basketballShoes + basketballOutfit + basketballBall + basketballAccessories;
    console.log(totalPriceBasketballEquipments);
}