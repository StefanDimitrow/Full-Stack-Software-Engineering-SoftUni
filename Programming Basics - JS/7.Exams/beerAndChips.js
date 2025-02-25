function beerAndChips(input) {
    let name = input[0]
    let budget = Number(input[1])
    let beerCount = Number(input[2])
    let chipsCount = Number(input[3])

    let beerPrice = 1.20
    let totalBeerPrice = beerPrice * beerCount

    let chipsPrice = 0.45 * totalBeerPrice
    let totalChipsPrice = Math.ceil(chipsPrice * chipsCount)

    let totalPrice = totalBeerPrice + totalChipsPrice

    if (budget > totalPrice) {
        console.log(`${name} bought a snack and has ${(budget - totalPrice).toFixed(2)} leva left.`)
    }
    if (budget < totalPrice) {
        console.log(`${name} needs ${(totalPrice - budget).toFixed(2)} more leva!`)
    }
}
beerAndChips(["Valentin", "5", "2", "4"])