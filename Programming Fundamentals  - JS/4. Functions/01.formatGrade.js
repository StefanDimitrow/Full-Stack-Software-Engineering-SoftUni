function solve(grade) {
  if (grade < 3.0) {
    console.log("Fail (2)");
  } else if (grade >= 3.0 && grade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else if (grade >= 5.5 && grade <= 6) {
    console.log(`Excellent (${grade.toFixed(2)})`);
  } else if (grade > 6) {
    console.log(`Invalid grade`);
  }
}
solve(3.33);
console.log("------------------------------------");
solve(4.5);
console.log("------------------------------------");
solve(6);
