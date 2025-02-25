function bonusPoints([playerPoints]){

    let points = Number(playerPoints);
    let addedPoints = 0;

    if (points<=100) {
        addedPoints=5;
    } else if (points>100 && points<1000) {
        addedPoints=(20/100)*points;
    } else if (points>1000) {
        addedPoints=(10/100)*points;
    } 

    if (points%2===0) {
        addedPoints=addedPoints+1;      
    }

    if (points%10===5) {
        addedPoints=addedPoints+2
    }

    
    let totalPoints = points + addedPoints;
    console.log(addedPoints);
    console.log(totalPoints);
}