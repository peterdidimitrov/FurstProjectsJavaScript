function coins (input) {
    let money = Number(input[0]);
  let moneyToCoins = Math.floor(money * 100);
  
  let coinsCounter = 0;
  
  while (moneyToCoins > 0){
    coinsCounter++;
        if (moneyToCoins >= 200){
        moneyToCoins -= 200;
    }  else if (moneyToCoins >= 100){
        moneyToCoins -= 100;
    } else if (moneyToCoins >= 50){
        moneyToCoins -= 50;
    } else if (moneyToCoins >= 20){
        moneyToCoins -= 20;
    } else if (moneyToCoins >= 10){
        moneyToCoins -= 10;
    } else if (moneyToCoins >= 5){
        moneyToCoins -= 5;
    } else if (moneyToCoins >= 2){
        moneyToCoins -= 2;
    } else if (moneyToCoins >= 1){
        moneyToCoins -= 1;
    }
  }
  console.log(coinsCounter);
}
coins(["0.56"]);