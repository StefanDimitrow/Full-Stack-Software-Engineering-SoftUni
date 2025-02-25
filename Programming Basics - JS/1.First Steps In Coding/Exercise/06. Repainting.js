function repainting (input){
    let nylon = Number (input[0]);
    let paint = Number (input[1]);
    let thinner = Number (input[2]);
    let hours = Number (input[3]);

    let nylonFinalSum = (nylon + 2) * 1.50;
    let paintFinalSum = (paint * 1.1) * 14.50;
    let thinnerFinalSum = thinner * 5;
    let bagPrice = 0.40;

    let materialsFinalSum = nylonFinalSum + paintFinalSum + thinnerFinalSum + bagPrice;
    let finalSum = materialsFinalSum * 0.3 * hours;
    let finalSumWithMaterials = finalSum + materialsFinalSum
    console.log(finalSum + materialsFinalSum);
    
}