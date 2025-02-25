function solve(day){

    let dayOfWeekString = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let result = dayOfWeekString[day-1];
    if(result){
        console.log(result);
    } else {
        console.log("Invalid day!");
    }

}
solve(3);
console.log("------------------------------------");
solve(6);
console.log("------------------------------------");
solve(11);