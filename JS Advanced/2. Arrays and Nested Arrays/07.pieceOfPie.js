function solve(arr, a, b) {
  return arr.slice(arr.indexOf(a), arr.indexOf(b) + 1);
}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
console.log("--------------------");
solve(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
