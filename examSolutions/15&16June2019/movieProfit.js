function movieProfit(input) {
    let name = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentForCinema = Number(input[4]) / 100;

    let ticketsPricceForOneDay = tickets * ticketPrice;
    let moneyForAllDays = days * ticketsPricceForOneDay;
    let calcTotal = moneyForAllDays - moneyForAllDays * percentForCinema;
    
    console.log(`The profit from the movie ${name} is ${calcTotal.toFixed(2)} lv.`);
    
  }
  movieProfit(["The Jungle","22", "20500", "9.37", "30"]);