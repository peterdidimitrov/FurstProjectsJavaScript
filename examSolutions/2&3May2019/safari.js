function safari(input) {
    let budget = Number(input[0]);
    let fuelLitre = Number(input[1]);
    let day = input[2];

    let fuelPrice = fuelLitre * 2.10;
    let guide = 100;
    let sum = fuelPrice + guide;
  
    if (day == "Saturday") {
      sum = sum * 0.9;
    } else {
        sum = sum * 0.8;
    }
    let difference = budget - sum;

    if (difference >= 0) {
        console.log(`Safari time! Money left: ${difference.toFixed(2)} lv.`);
    } else {
      console.log(`Not enough money! Money needed: ${Math.abs(difference).toFixed(2)} lv.`);
    }
  }
  safari(["105.20", "15", "Sunday"]);