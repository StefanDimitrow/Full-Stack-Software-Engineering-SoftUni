function DepositsCalculator(input){
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInerestRate = Number(input[2]);
    let finalSum = depositSum + depositPeriod * ((depositSum * annualInerestRate / 100) / 12);
    console.log(finalSum);
}