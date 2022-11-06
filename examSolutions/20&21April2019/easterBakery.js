function easterBakery(input) {
    let flourPrice = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggsNum = Number(input[3]);
    let yeastPackets = Number(input[4]);

    let sugarPriceKg = flourPrice * 0.75;
    let sugarPrice = sugarPriceKg * sugarKg;
    let eggsPrice = (flourPrice * 1.10) * eggsNum;
    let yeastPrice = (sugarPriceKg * 0.20) * yeastPackets;
    let flourPriceSum = flourPrice * flourKg;
    let calcTotal = sugarPrice + eggsPrice + yeastPrice + flourPriceSum;
    
    console.log(calcTotal.toFixed(2));
    
  }
  easterBakery(["63.44", "3.57", "6.35", "8", "2"]);