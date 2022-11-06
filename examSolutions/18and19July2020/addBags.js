function addBags(input) {
    let bagsPrice = Number(input[0]);
    let bagsKg = Number(input[1]);
    let days = Number(input[2]);
    let bagsNum = Number(input[3]);
    
 
    if (bagsKg < 10) {
        bagsPrice = bagsPrice * 0.20;
    } else if (bagsKg >= 10 && bagsKg <= 20) {
            bagsPrice = bagsPrice / 2;
    }
    
    if (days > 30) {
            bagsPrice = bagsPrice * 1.10;
    } else if (days >= 7 && days <= 30) {
            bagsPrice = bagsPrice * 1.15;
    } else if (days < 7) {
            bagsPrice = bagsPrice * 1.40;
    }
    
    let sum = bagsPrice * bagsNum;
    
    console.log(`The total price of bags is: ${sum.toFixed(2)} lv. `);
  }
  addBags(["63.80", "23", "3", "1"]);