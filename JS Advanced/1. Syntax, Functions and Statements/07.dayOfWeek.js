function solve(str) {
  let result;

  switch (str) {
    case "Monday":
      result = 1;
      break;
    case "Tuesday":
      result = 2;
      break;
    case "Wednesday":
      result = 3;
      break;
    case "Thursday":
      result = 4;
      break;
    case "Friday":
      result = 5;
      break;
    case "Saturday":
      result = 6;
      break;
    case "Sunday":
      result = 7;
      break;
    default:
      result = "error";
      break;
  }
  return result;
}
solve("Monday");
console.log("--------------------");
solve("Friday");
console.log("--------------------");
solve("Invalid");
console.log("--------------------");
solve();
console.log("--------------------");
