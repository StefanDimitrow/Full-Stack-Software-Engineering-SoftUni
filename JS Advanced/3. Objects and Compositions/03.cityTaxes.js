function solve(n, p, t) {
  class City {
      constructor(n, p, t) {
          this.name = n
          this.population = p
          this.treasury = t
          this.taxRate = 10
      }

      collectTaxes = () => Math.round((this.treasury += this.population * this.taxRate))
      applyGrowth = p => Math.round((this.population += (this.population * p) / 100))
      applyRecession = p => Math.round((this.treasury -= (this.treasury * p) / 100))
  }

  return new City(n, p, t)
}
solve(const city = 
    cityTaxes('Tortuga',
    7000,
    15000);
  console.log(city);
  );
console.log("--------------------");
solve(const city =
    cityTaxes('Tortuga',
    7000,
    15000);
  city.collectTaxes();
  console.log(city.treasury);
  city.applyGrowth(5);
  console.log(city.population);
  );
console.log("--------------------");
solve();
console.log("--------------------");
solve();
console.log("--------------------");