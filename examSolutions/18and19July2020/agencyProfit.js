function agencyProfit(input) {
    let name = input[0];
    let adultTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let tax = Number(input[4]);
    let kidsTicketPrice = adultTicketPrice * 0.30 + tax;
    let adultTicketPricePlusTax = adultTicketPrice + tax;
    let profit = ((adultTickets * adultTicketPricePlusTax + kidsTickets * kidsTicketPrice) * 0.20).toFixed(2);
    console.log(`The profit of your agency from ${name} tickets is ${profit} lv.`);
}
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);