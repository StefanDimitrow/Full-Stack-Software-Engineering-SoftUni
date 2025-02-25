function foodDelivery(input){
    let numberChickenMenu = Number (input[0]);
    let numberFishMenu = Number (input[1]);
    let numberVegiMenu = Number (input[2]);

    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegiMenu = 8.15;
    
    let priceChickenMenu = numberChickenMenu * chickenMenu;
    let priceFishMenu = numberFishMenu * fishMenu; 
    let priceVegiMenu = numberVegiMenu * vegiMenu;

    let totalPriceMenu = priceChickenMenu + priceFishMenu + priceVegiMenu;

    let priceDesert = totalPriceMenu * 0.2;
    let deliveryPrice = 2.50;
    let totalPrice = totalPriceMenu + priceDesert + deliveryPrice;
    console.log(totalPrice);
}