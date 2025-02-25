function solve(fruit, weightGrams, priceKilo) {
  let kilo = weightGrams / 1000;
  let totalPrice = kilo * priceKilo;

  console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruit}.`);
}
solve("orange", 2500, 1.8);
console.log("--------------------");
solve("apple", 1563, 2.35);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
