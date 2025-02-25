function equalSumsEvenOddPosition (input){
        let firstN = Number(input[0]);
        let secondN = Number(input[1]);
        let result = ``;
        let sumCc = 0;
        let sumNh = 0;
        for (let currNum = firstN; currNum <= secondN; currNum++) {
    
            let num = currNum.toString();
            sumCc = Number(num[0]) + Number(num[2]) + Number(num[4]);
            sumNh = Number(num[1]) + Number(num[3]) + Number(num[5]);
            if (sumCc === sumNh)
            result += `${num} `;
    
        }
        console.log(result);
}
equalSumsEvenOddPosition(["100000","100050"])