function coffeeMachine(input) {
    let beveridge = input[0];
    let suggar = input[1];
    let beveridgeNum = Number(input[2]);
   
    let espressoPrice = 0.90;
    let cappuccinoPrice = 1.00;
    let teaPrice = 0.50;
   
    let sum = 0;
   
    if (beveridge === "Espresso") {
      if (suggar === "Without") {
        espressoPrice = espressoPrice * 0.65;
      } else if (suggar === "Normal") {
        espressoPrice = 1.00;
      } else if (suggar === "Extra") {
        espressoPrice = 1.20;
      }
      if (beveridgeNum >= 5) {
        espressoPrice = espressoPrice * 0.75;
      }
      sum = espressoPrice * beveridgeNum;
    } else if (beveridge === "Cappuccino") {
      if (suggar === "Without") {
        cappuccinoPrice = cappuccinoPrice * 0.65;
      } else if (suggar === "Normal") {
        cappuccinoPrice = 1.20;
      } else if (suggar === "Extra") {
        cappuccinoPrice = 1.60;
      }
      sum = cappuccinoPrice * beveridgeNum;
    } else if (beveridge === "Tea") {
      if (suggar === "Without") {
        teaPrice = teaPrice * 0.65;
      } else if (suggar === "Normal") {
        teaPrice = 0.6;
      } else if (suggar === "Extra") {
        teaPrice = 0.70;
      }
      sum = teaPrice * beveridgeNum;
    }
    if (sum > 15) {
      sum = sum * 0.80;
    }
   
    console.log(`You bought ${beveridgeNum} cups of ${beveridge} for ${sum.toFixed(2)} lv.`);
  }
  coffeeMachine(["Tea", "Extra", "3"]);