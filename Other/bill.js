var drink1 = 2.30;
var drink2 = 2.20;
var total = drink1 + drink2;

var bill = `The total cost of your drinks is $${total}. ${total > 4.00 ? "Would you like to join our coffee club? It will earn you a free coffee for every ten that you buy." : ""}`;
console.log(bill);