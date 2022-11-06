function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananaKilos = Number(input[1]);
    let orangesKilos = Number(input[2]);
    let raspberryKilos = Number(input[3]);
    let strawberriesKilos = Number(input[4]);
  
    let raspberryPrice = strawberriesPrice * 0.50;
    let orangesPrice = raspberryPrice * 0.60;
    let bananaPrice = raspberryPrice * 0.20;

    let raspberrySum = raspberryKilos * raspberryPrice;
    let orangesSum = orangesKilos * orangesPrice;
    let bananaSum = bananaKilos * bananaPrice;
    let strawberriesSum = strawberriesKilos * strawberriesPrice;

    let totalMoney = raspberrySum + orangesSum + bananaSum + strawberriesSum;
    console.log(totalMoney);
  }
  fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);