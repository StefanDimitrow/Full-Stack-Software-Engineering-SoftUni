function solve(arr) {
  return JSON.stringify(
    arr
      .map((x) => x.split(" / "))
      .reduce((a, v) => {
        a.push({
          name: v[0],
          level: Number(v[1]),
          items: v[2] ? v[2].split(", ") : [],
        });
        return a;
      }, [])
  );
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
console.log("--------------------");
solve(["Jake / 1000 / Gauss, HolidayGrenade"]);
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");
