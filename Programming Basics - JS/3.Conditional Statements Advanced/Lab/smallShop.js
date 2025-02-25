function smallShop(input){
    let product = input[0];
    let city = input[1];
    let quantity = input[2];
    let price = 0;

    if (city == "Sofia"){
        if (product == "coffee") {
            price = 0.50 *quantity;
        } else if (product == "water") {
            price = 0.80 * quantity;
        } else if (product == "beer") {
            price = 1.20 * quantity;
        } else if (product == "sweets") {
            price = 1.45 * quantity;
        } else if (product == "peanuts") {
            price = 1.60 * quantity
        }
    }
    if (city == "Plovdiv"){
        if (product == "coffee") {
            price = 0.40 * quantity;
        } else if (product == "water") {
            price = 0.70 * quantity;
        } else if (product == "beer") {
            price = 1.15 * quantity;
        } else if (product == "sweets") {
            price = 1.30 * quantity;
        } else if (product == "peanuts") {
            price = 1.50 * quantity;
    }
}
    if (city == "Varna"){
        if (product == "coffee") {
            price = 0.45 * quantity;
        } else if (product == "water") {
            price = 0.70 * quantity;
        } else if (product == "beer") {
            price = 1.10 * quantity;
        } else if (product == "sweets") {
            price = 1.35 * quantity;
        } else if (product == "peanuts") {
            price = 1.55 * quantity;
    }
}
console.log(price)
}
smallShop(["peanuts","Plovdiv","2"]);