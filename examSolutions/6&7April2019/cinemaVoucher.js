function cinemaVoucher(input) {
    let index = 0;
    let voucherAmount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    ticketsCounter = 0;
    otherPurchaseCounter = 0;

    while (command !== 'End') {
        let purchase = command;

        if (purchase.length > 8) {
            let ticketPrice = 0;
            ticketPrice = purchase[0].charCodeAt(0) + purchase[1].charCodeAt(0);
            if (ticketPrice <= voucherAmount) {
                voucherAmount -= ticketPrice;
            } else {
                break;
            }
            ticketsCounter++;
        } else {
            let purchasePrice = 0;
            purchasePrice = purchase[0].charCodeAt(0);
            if (purchasePrice <= voucherAmount) {
                voucherAmount -= purchasePrice;
            } else {
                break;
            }
            otherPurchaseCounter++;
        }
        command = input[index];
        index++;
    }
    console.log(`${ticketsCounter}`);
    console.log(`${otherPurchaseCounter}`);
}
cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);