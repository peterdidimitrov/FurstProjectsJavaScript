function trekkingMania(input) {
    let index = 0;
    let numGroups = Number(input[index]);
    index++;

    let musala = 0;
    let monblan = 0;
    let kilimangaro = 0;
    let k2 = 0;
    let everest = 0;
    let sum = 0;

    for (i = 0; i < numGroups; i++) {
        let numPeople = Number(input[index]);
        sum += numPeople;
        index++;
        if (numPeople <= 5) {
            musala += numPeople;
        } else if (numPeople >= 6 && numPeople <= 12) {
            monblan += numPeople;
        } else if (numPeople >= 13 && numPeople <= 25) {
            kilimangaro += numPeople;
        } else if (numPeople >= 26 && numPeople <= 40) {
            k2 += numPeople;
        } else {
            everest += numPeople;
        }
    }

    let pursMusala = musala / sum * 100;
    let pursMonblan = monblan / sum * 100;
    let pursKilimangaro = kilimangaro / sum * 100;
    let pursK2 = k2 / sum * 100;
    let pursEverest = everest / sum * 100;

    console.log(`${pursMusala.toFixed(2)}%`);
    console.log(`${pursMonblan.toFixed(2)}%`);
    console.log(`${pursKilimangaro.toFixed(2)}%`);
    console.log(`${pursK2.toFixed(2)}%`);
    console.log(`${pursEverest.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);