function solve(arr) {
  return arr
    .sort((a, b) =>
      a.length - b.length === 0
        ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
        : a.length - b.length
    )
    .join("\n");
}
solve(["alpha", "beta", "gamma"]);
console.log("--------------------");
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("---------------------");
solve(["test", "Deny", "omen", "Default"]);
