function familyTrip(input) {
    let budget = Number(input[0]);
    let overnightNum = Number(input[1]);
    let oneOvernightPrice = Number(input[2]);
    let percent = Number(input[3]) / 100;

    if (overnightNum > 7) {
        oneOvernightPrice = oneOvernightPrice * 0.95;
    }

    let overnightPrice = oneOvernightPrice * overnightNum;
    let additionalCosts = budget * percent;
    let calcTotal = overnightPrice + additionalCosts;
    let diference = budget- calcTotal;

    if (calcTotal <= budget) {
        console.log(`Ivanovi will be left with ${diference.toFixed(2)} leva after vacation.`);
    } else {
        console.log(Math.abs(diference).toFixed(2) + ' leva needed.');
    }
    
  }
  familyTrip(["500", "7", "66", "15"]);