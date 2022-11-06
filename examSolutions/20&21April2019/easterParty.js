function easterParty(input) {
    let guestNum = Number(input[0]);
    let ticketPriceForOne = Number(input[1]);
    let budget = Number(input[2]);

    let cake = budget * 0.10;
    
    if (guestNum >= 10 && guestNum <= 15){
        ticketPriceForOne = ticketPriceForOne * 0.85;
    } else if (guestNum > 15 && guestNum <= 20){
        ticketPriceForOne = ticketPriceForOne * 0.80;
    } else if (guestNum > 20){
        ticketPriceForOne = ticketPriceForOne * 0.75;
    }

    let totalMoney = guestNum * ticketPriceForOne + cake;
    let diference = budget - totalMoney;

    if (totalMoney <= budget) {
        console.log(`It is party time! ${diference.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${Math.abs(diference).toFixed(2)} leva needed.`);
    }
  }
  easterParty(["24", "35", "550"]);