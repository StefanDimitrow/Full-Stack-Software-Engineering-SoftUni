function lunchBreak(input){
    let tvshow = input[0];
    let durationEP = Number (input[1]);
    let durationBreak = Number (input[2]);

    let lunch = durationBreak / 8;
    let rest = durationBreak / 4;

    let totalFreeTime = durationBreak - lunch - rest;
    let timeLeft = Math.abs(totalFreeTime - durationEP);

    if(totalFreeTime >= durationEP) {
        console.log(`You have enough time to watch ${tvshow} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${tvshow}, you need ${Math.ceil(timeLeft)} more minutes.`)
    }

}
lunchBreak(["Teen Wolf", "48", "60"])