function catFood(input) {
    let catsCount = Number(input[0])
    gramsPerDay = Number(input[1])

    group1 = 0
    group2 = 0
    group3 = 0
    foodPerDay = 0
    priceFoodPerDay = 12.45
    let i = 0;

    for (let i = 0; catsCount >= i; i++) {
        gramsPerDay = Number(input.shift())
        if (gramsPerDay >= 100 && gramsPerDay < 200) {
            group1++
        } else if (gramsPerDay >= 200 && gramsPerDay < 300) {
            group2++
        } else if (gramsPerDay >= 300 && gramsPerDay <= 400) {
            group3++
        }
        foodPerDay += gramsPerDay
    }
   
    console.log(`Group 1: ${group1} cats.`)
    console.log(`Group 2: ${group2} cats.`)
    console.log(`Group 3: ${group3} cats.`)
    console.log(`Price for food per day: ${(group1*gramsPerDay)} + ${(group2*gramsPerDay)} + ${(group3*gramsPerDay)}}`)
   






}
catFood(["6", "102", "236", "123", "399", "342", "222"])