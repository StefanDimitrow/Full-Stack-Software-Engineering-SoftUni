function solve(string, char, result) {
  let res = string.replace(`_`, char);
  let output = res === result ? "Matched" : "Not Matched";
  console.log(output);
}
solve("Str_ng", "I", "Strong");
console.log("------------------------------------");
solve("Str_ng", "i", "String");
console.log("------------------------------------");
solve();
