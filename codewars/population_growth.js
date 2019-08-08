// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

function nbYear(p0, percent, aug, p) {
    var yearCounter = 0;
    var population = p0;
    while(population < p){
        population = population + (population * percent/100) + aug;
        yearCounter++;
        console.log("POPULATION IS", population)
    }
    return yearCounter;
}

nbYear(1500, 5, 100, 5000)