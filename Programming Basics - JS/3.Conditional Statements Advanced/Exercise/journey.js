function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];


    if (budget <= 100) {
        console.log(`Somewhere in Bulgaria`);
        switch (season) {
            case `summer`:
                budget = budget * 0.3;
                console.log(`Camp - ${budget.toFixed(2)}`);
                break;
            case `winter`:
                budget = budget * 0.7;
                console.log(`Hotel - ${budget.toFixed(2)}`);
                break;
        }

    } else if (budget <= 1000) {
        console.log(`Somewhere in Balkans`);
        switch (season) {
            case `summer`:
                budget = budget * 0.4;
                console.log(`Camp - ${budget.toFixed(2)}`);
                break;
            case `winter`:
                budget = budget * 0.8;
                console.log(`Hotel - ${budget.toFixed(2)}`);
                break;
        }

    } else if (budget > 1000) {
        console.log(`Somewhere in Europe`);
        budget = 0.9 * budget;
        console.log(`Hotel - ${budget.toFixed(2)}`);

    }
}
journey(["1500", "summer"])