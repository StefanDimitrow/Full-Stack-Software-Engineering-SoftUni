function solve(r, h) {
  let volu = ((Math.PI * r * r * h) / 3).toFixed(4);
  let str = "volume";
    console.log(`${str} = ${volu}`);
  let s = Math.PI(r * r + h * h);
  let arr = Math.PI * r * (r + s);
  let str1 = "area";
    console.log(`${str1} = ${arr.toFixed(4)}`);
}
solve(3, 5);
console.log("------------------------------------");
solve(3.3, 7.8);
console.log("------------------------------------");
solve();
