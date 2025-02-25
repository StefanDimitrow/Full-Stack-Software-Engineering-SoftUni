function solve(day, age) {
    let price = 0;
    if (day == 'Weekday') {
        if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
            price = 12;
        }
        if (18 < age && age <= 64) {
            price = 18;
        }
    } else if (day == 'Weekend') {
        if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
            price = 15;
        } else if (age > 18 && age <= 64) {
            price = 20;
        }
    } else if (day == 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5;
        }
        if (18 < age && age <= 64) {
            price = 12;
        }
        if (64 < age && age <= 122) {
            price = 10;
        }
    }
    if (price != 0) {
        console.log(price + '$');
    } else {
        console.log('Error!');
    }
}
solve('Weekday', 42);
console.log("------------------------------------");
solve('Holiday', -12);
console.log("------------------------------------");
solve('Holiday', 15);