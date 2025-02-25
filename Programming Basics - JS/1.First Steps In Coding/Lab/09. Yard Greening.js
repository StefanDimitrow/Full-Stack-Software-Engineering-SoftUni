function yardGreening(input) {
let squareMeters = input[0];
let priceSQMeters = 7.61 * squareMeters;
let discount = Number(priceSQMeters *0.18);
let totalPrice = Number(priceSQMeters - discount);
console.log(`The final price is: ${totalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);
}