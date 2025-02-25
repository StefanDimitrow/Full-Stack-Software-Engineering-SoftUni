function swimmingRecord(input){
    let worldRecord = Number(input[0]);
    let distance = Number (input[1]);
    let timeForM = Number (input[2]);

    let totalTime = distance * timeForM;
    let slowTime = Math.floor(distance/15);
    totalTime = totalTime + (slowTime*12.5);
    if (totalTime < worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        diff= Math.abs(totalTime - worldRecord);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
   
}
swimmingRecord(["55555.67", "3017", "5.03"])
