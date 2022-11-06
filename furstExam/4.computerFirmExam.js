function computerFirm(input) {
    let index = 0;
    let computerNum = Number(input[index]);
    index++;
    let num = Number(input[index]);
    let realsels = 0;
    let sumRaiting = 0;
    let realSaleSum = 0;

    for (let i = 0; i < computerNum; i++) {
        let currentNum = Number(input[index]);
        index++;
        let raiting = currentNum % 10;
        sumRaiting += raiting;

        let sels = (currentNum - raiting) / 10;

        if (raiting === 2) {
            realsels = 0;
            realSaleSum += realsels;
        } else if (raiting === 3) {
            realsels = sels * 0.50;
            realSaleSum += realsels;
        } else if (raiting === 4) {
            realsels = sels * 0.70;
            realSaleSum += realsels;
        } else if (raiting === 5) {
            realsels = sels * 0.85;
            realSaleSum += realsels;
        } else if (raiting === 6) {
            realsels = sels;
            realSaleSum += realsels;
        }
    }
    let avgRaiting = sumRaiting / computerNum;
    console.log(realSaleSum.toFixed(2));
    console.log(avgRaiting.toFixed(2));

}
computerFirm(["3", "103", "103", "103"]);