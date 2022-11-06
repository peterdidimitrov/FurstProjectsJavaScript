function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let type;
    
    if (budget <= 100) {
      destination = "Bulgaria";
        if (season === "summer") {
          type = "Camp";
          budget = budget * 0.30;
        } else if (season === "winter") {
          type = "Hotel";
          budget = budget * 0.70;
        }
    } else if (budget > 100 && budget <= 1000) {
      destination = "Balkans";
        if (season === "summer") {
          type = "Camp";
          budget = budget * 0.40;
        } else if (season === "winter") {
          budget = budget * 0.80;
          type = "Hotel";
        }
    } else if (budget > 1000) {
      destination = "Europe";
      type = "Hotel";
      budget = budget * 0.90;
    }      
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${budget.toFixed(2)}`);
  }
  journey(["678.53", "winter"]);