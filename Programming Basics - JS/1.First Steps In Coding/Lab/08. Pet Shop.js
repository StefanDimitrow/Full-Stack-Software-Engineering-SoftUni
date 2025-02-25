function food (input) {
  let dogs = Number(input.shift());
  let other = Number(input.shift());
  let price = dogs * 2.5 + other * 4;
  console.log(price.toFixed(2) + " lv.");
}