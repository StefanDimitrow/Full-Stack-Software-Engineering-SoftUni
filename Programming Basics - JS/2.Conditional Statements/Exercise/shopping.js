function shopping(input){
    let budget = Number (input[0]);
    let videoCardN = Number (input[1]);
    let proccessorN = Number (input[2]);
    let ramN = Number (input[3]);
    
    let videoCardSum = videoCardN * 250;
    
    let proccessorPrice = 0.35 * videoCardSum;
    let proccessorSum = proccessorPrice * proccessorN;
    
    let ramPrice = 0.10 * videoCardSum;
    let ramSum = ramPrice * ramN;

    let totalPrice = videoCardSum + proccessorSum + ramSum;
    
    if (videoCardN > proccessorN){
        totalPrice = totalPrice * 0.85;
    }
    diff = Math.abs(totalPrice - budget);

    if(budget >=totalPrice) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}
shopping(["920.45","3","1" ,"1"])