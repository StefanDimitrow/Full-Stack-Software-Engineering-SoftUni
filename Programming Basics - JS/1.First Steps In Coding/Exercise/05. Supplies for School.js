function suppliesForSchool(input){
    let pensPackages = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);
    let pensPrice = pensPackages * 5.80;
    let markersPrice = markers * 7.20;
    let litersPrice = liters * 1.20;
    let finalPrice = pensPrice + markersPrice + litersPrice; 
    let totalPrice = finalPrice - (finalPrice * discount/100);
    console.log(totalPrice);

}