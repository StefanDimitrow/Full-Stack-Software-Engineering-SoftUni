function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    switch (operator) {
        case `+`:
            let result = n1 + n2;
            if (result % 2 === 0) {
                console.log(`${n1} + ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} + ${n2} = ${result} - odd`);
            }
            break;
        case `-`:
            if ((n1 - n2) % 2 === 0) {
                console.log(`${n1} - ${n2} = ${n1 - n2} - even`);
            } else {
                console.log(`${n1} - ${n2} = ${n1 - n2} - odd`);
            }
            break;
        case `*`:
            if ((n1 * n2) % 2 === 0) {
                console.log(`${n1} * ${n2} = ${n1 * n2} - even`);
            } else {
                console.log(`${n1} * ${n2} = ${n1 * n2} - odd`);
            }
            break;
        case `/`:
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
            }
            break;
        case `%`:
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} % ${n2} = ${n1 % n2}`);
            }
            break;
    }

}
operationsBetweenNumbers(["10", "12", "+"])