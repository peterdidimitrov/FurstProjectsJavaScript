function easterLunch(input) {
    let kozunakNum = Number(input[0]);
    let eggsNum = Number(input[1]);
    let cookiesKg = Number(input[2]);
    
    let kozunakPrice = kozunakNum * 3.20;
    let eggsPrice = eggsNum * 4.35;
    let cookiesPrice = cookiesKg * 5.40;
    let paitPrice = eggsNum * 12 * 0.15;
    let calcTotal = kozunakPrice + eggsPrice + cookiesPrice + paitPrice;
    
    console.log(calcTotal.toFixed(2));
    
  }
  easterLunch(["4", "4", "3"]);