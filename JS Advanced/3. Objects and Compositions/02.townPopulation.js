function solve(arr) {
  const towns = {};

  for (let townAsString of arr) {
    let [name, population] = townAsString.split(" <-> ");
    population = Number(population);

    if (towns[name] != undefined) {
      population += towns[name];
    }
    towns[name] = population;
  }
  for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}
solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
console.log("--------------------");
solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
