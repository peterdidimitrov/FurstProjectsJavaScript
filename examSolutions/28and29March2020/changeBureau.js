function changeBureau(input) {
    let bitcoins = Number(input[0]);
    let chineseYuans = Number(input[1]);
    let comision = Number(input[2]);
    
    let bitcoinsSum = bitcoins * 1168;
    let chineseYuansSum = (chineseYuans * 0.15) * 1.76;
    let sumMoney = bitcoinsSum + chineseYuansSum;
    let sumMoneyEuro = sumMoney / 1.95;
    let sumTotal = sumMoneyEuro - (sumMoneyEuro * comision / 100);
    
    console.log(sumTotal.toFixed(2));
  }
  changeBureau(["20", "5678", "2.4"]);