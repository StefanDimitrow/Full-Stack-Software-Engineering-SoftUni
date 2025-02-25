
    function traveling (input){
        let destination = input.shift();
        let budget = 0;
        let savings = 0;
    
        while (destination!=="End"){
            budget = Number(input.shift());
            savings = 0;
    
            while (savings < budget) {
                savings+=Number(input.shift());
            }
            console.log(`Going to ${destination}!`);
            destination = input.shift();
        }
    }

traveling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"])