function oscarsCeremony(input) {
    let rent = Number(input[0]);
    let oscarsPrice = rent * 0.70;
    let servicePrice = oscarsPrice * 0.85;
    let audioPrice = servicePrice * 0.50;
  
    let totalMoney = rent + oscarsPrice + servicePrice + audioPrice;

    console.log(totalMoney.toFixed(2));
  }
  oscarsCeremony(["5555"]);