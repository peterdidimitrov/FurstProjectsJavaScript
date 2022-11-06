function catWalking(input) {
    let walkMin = Number(input[0]);
    let numWalks = Number(input[1]);
    let caloriesIn = Number(input[2]);
    
    let minutesSum = numWalks * walkMin;
    let caloriesOut = minutesSum * 5;
    let persentCal = caloriesIn * 0.50;
    
 if (caloriesOut >= persentCal) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesOut}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesOut}.`);
  }
  }
  catWalking(["15", "2", "500"]);