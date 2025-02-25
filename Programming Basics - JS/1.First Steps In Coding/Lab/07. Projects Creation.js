function projectMaking(input){
    let name = (input[0]);
    let numberProject = Number(input[1]);
    let hoursNeeded = numberProject*3;
    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${numberProject} project/s.`);
}