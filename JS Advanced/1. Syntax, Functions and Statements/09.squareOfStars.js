function solve(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string += "* ";
    }
    string += "\n";
  }
  console.log(string);
}
solve(1);
console.log("--------------------");
solve(2);
console.log("--------------------");
solve(5);
console.log("--------------------");
solve(7);
console.log("--------------------");
