function solve(groupPeople, typeGroup, dayWeek) {

    let totalSum = 0;

    if (dayWeek === "Friday") {
        if (typeGroup === "Students") {
            totalSum = groupPeople * 8.45;
        } else if (typeGroup === "Business") {
            totalSum = groupPeople * 10.90;
        } else if (typeGroup === "Regular") {
            totalSum = groupPeople * 15;
        }
    } else if (dayWeek === "Saturday") {
        if (typeGroup === "Students") {
            totalSum = groupPeople * 9.80;
        } else if (typeGroup === "Business") {
            totalSum = groupPeople * 15.60;
        } else if (typeGroup === "Regular") {
            totalSum = groupPeople * 20;
        }
    } else if (dayWeek === "Sunday") {
        if (typeGroup === "Students") {
            totalSum = groupPeople * 10.46;
        } else if (typeGroup === "Business") {
            totalSum = groupPeople * 16;
        } else if (typeGroup === "Regular") {
            totalSum = groupPeople * 22.50;
        }
        if (groupPeople >= 30 && typeGroup === "Students") {
            totalSum = totalSum - (0.15 * totalSum);
        } else if (groupPeople >= 100 && typeGroup === "Business") {
            totalSum = totalSum - ((totalSum / groupPeople) * 10);
        } else if (typeGroup === "Regular" && groupPeople >= 10 && groupPeople <= 20) {
            totalSum = totalSum * 0.95;
        }
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);

}

solve(30, "Students", "Sunday");
console.log("------------------------------------");
solve(40, "Regular", "Saturday");
console.log("------------------------------------");
solve();