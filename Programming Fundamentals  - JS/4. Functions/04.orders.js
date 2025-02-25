function solve(order, count) {
  switch (order) {
    case "coffee":
      price = 1.5;
      console.log((price * count).toFixed(2));
      break;
    case "water":
      price = 1.0;
      console.log((price * count).toFixed(2));
      break;
    case "coke":
      price = 1.4;
      console.log((price * count).toFixed(2));
      break;
    case "snacks":
      price = 2.0;
      console.log((price * count).toFixed(2));
      break;
    default:
      break;
  }
}
solve("water", 5);
console.log("------------------------------------");
solve("coffee", 2);
console.log("------------------------------------");
solve("snacks", 11);
