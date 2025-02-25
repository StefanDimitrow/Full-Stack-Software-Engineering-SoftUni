function solve(n, m) {
  let numN = Number(n);
  let numM = Number(m);

  let result = 0;

  for (let i = numN; i <= numM; i++) {
    result += i;
  }

  return result;
}
solve("1", "5");
console.log("--------------------");
solve("-8", "20");
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
