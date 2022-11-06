function paintingEggs (input) {
    let eggsSize = input[0];
  let eggsColor = input[1];
  let numPart = Number(input[2]);
  
  
  let incomes = 0;
  
  
  switch (eggsSize) {
  case "Large":
        if (eggsColor === "Red") {
            incomes = numPart * 16; 
      } else if (eggsColor === "Green") {
            incomes = numPart * 12;
      } else if (eggsColor === "Yellow") {
            incomes =numPart * 9;
      }
  break;
  case "Medium":
        if (eggsColor === "Red") {
            incomes = numPart * 13; 
      } else if (eggsColor === "Green") {
            incomes = numPart * 9;
      } else if (eggsColor === "Yellow") {
            incomes = numPart * 7;
      }
    break;
  case "Small":
        if (eggsColor === "Red") {
            incomes = numPart * 9; 
      } else if (eggsColor === "Green") {
            incomes = numPart * 8;
      } else if (eggsColor === "Yellow") {
            incomes = numPart * 5;
      }
    break;
  }
  let costs = incomes * 0.35;
  let totalIncomes = incomes - costs;
  console.log(`${totalIncomes.toFixed(2)} leva.`);
}
paintingEggs(["Small", "Yellow", "3"]);