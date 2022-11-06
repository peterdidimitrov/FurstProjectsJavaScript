function series(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let seriesNum = Number(input[index]);
    index++;

    let priceForSeries = 0;

    for (let i = 0; i < seriesNum; i++) {
        let nameSeries = input[index];
        index++;
        let priceForOne = Number(input[index]);
        index++;
        if (nameSeries === "Thrones") {
            priceForOne = priceForOne * 0.50;
        } else if (nameSeries === "Lucifer") {
            priceForOne = priceForOne * 0.60;
        } else if (nameSeries === "Protector") {
            priceForOne = priceForOne * 0.70;
        } else if (nameSeries === "TotalDrama") {
            priceForOne = priceForOne * 0.80;
        } else if (nameSeries === "Area") {
            priceForOne = priceForOne * 0.90;
        }

        priceForSeries += priceForOne;
    }
    let diff = Math.abs(budget - priceForSeries);
    if (budget >= priceForSeries) {
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
    }

}
series(["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones", "5", "Lucifer", "9"]);