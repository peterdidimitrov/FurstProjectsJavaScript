function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishManNum = Number(input[2]);
    let rent = 0;

    switch (season) {
        case "Spring":
            rent = 3000;
            if (fishManNum <= 6) {
                rent = rent * 0.90;
            } else if (fishManNum >= 7 && fishManNum <= 11) {
                rent = rent * 0.85;
            } else {
                rent = rent * 0.75;
            }
            break;
        case "Summer":
        case "Autumn":
            rent = 4200;
            if (fishManNum <= 6) {
                rent = rent * 0.90;
            } else if (fishManNum >= 7 && fishManNum <= 11) {
                rent = rent * 0.85;
            } else {
                rent = rent * 0.75;
            } break;
        case "Winter":
            rent = 2600;
            if (fishManNum <= 6) {
                rent = rent * 0.90;
            } else if (fishManNum >= 7 && fishManNum <= 11) {
                rent = rent * 0.85;
            } else {
                rent = rent * 0.75;
            } break;
    }
    if (fishManNum % 2 === 0 && season != "Autumn") {
        rent = rent * 0.95;
    }
    let difference = Math.abs(budget - rent);
    if (budget >= rent) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }
}
fishingBoat(["2000", "Winter", "13"]);