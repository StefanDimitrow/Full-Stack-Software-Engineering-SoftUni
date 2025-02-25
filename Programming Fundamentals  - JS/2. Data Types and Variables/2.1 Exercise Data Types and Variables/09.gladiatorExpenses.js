function solve(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldtPrice,
  armorPrice) {
  let shieldCount = 0;
  let neededMoney = 0;

  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 === 0) {
      neededMoney += +helmetPrice;
    }
    if (i % 3 === 0) {
      neededMoney += +swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      neededMoney += +shieldtPrice;
      shieldCount++;
    }
    if (shieldCount % 2 === 0 && shieldCount > 0) {
      neededMoney += +armorPrice;
      shieldCount = 0;
    }
  }
  console.log(`Gladiator expenses: ${neededMoney.toFixed(2)} aureus`);
}
solve(7, 2, 3, 4, 5);
console.log("------------------------------------");
solve(23, 12.5, 21.5, 40, 200);
console.log("------------------------------------");
solve();
