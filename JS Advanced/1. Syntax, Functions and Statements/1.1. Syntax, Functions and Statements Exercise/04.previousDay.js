function solve(year, month, day) {
  let myDate = new Date(year, month - 1, day);
  myDate.setDate(myDate.getDate() - 1);

  console.log(
    `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
}
solve(2016, 9, 30);
console.log("--------------------");
solve(2015, 5, 10);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
