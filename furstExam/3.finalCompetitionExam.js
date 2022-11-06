function finalCompetition(input) {
    let dancesrsNum = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    price = 0;


    switch (place) {
        case "Bulgaria":
            price = points * dancesrsNum;
            if (season === 'summer') {
                price = price * 0.95;
            } else if (season === "winter") {
                price = price * 0.92;
            }
            break;
        case "Abroad":
            price = (dancesrsNum * points) + (dancesrsNum * points) / 2;
            if (season === 'summer') {
                price = price * 0.90;
            } else if (season === "winter") {
                price = price * 0.85;
            }
            break;
    }
    let sumForCharity = price * 0.75;
    let totoalPrice = price * 0.25;
    let preiceForOne = totoalPrice / dancesrsNum;


    console.log(`Charity - ${sumForCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${preiceForOne.toFixed(2)}`);
}
finalCompetition(["25", "98", "winter", "Bulgaria"]);