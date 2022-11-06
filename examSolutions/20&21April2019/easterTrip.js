function easterTrip (input) {
    let destination = input[0];
  let dates = input[1];
  let nightNum = Number(input[2]);
  
  let costs = 0;
  
  switch (destination) {
  case "France":
        if (dates === "21-23") {
            costs = nightNum * 30; 
      } else if (dates === "24-27") {
            costs = nightNum * 35;
      } else if (dates === "28-31") {
            costs = nightNum * 40;
      }
  break;
  case "Italy":
        if (dates === "21-23") {
            costs = nightNum * 28; 
      } else if (dates === "24-27") {
            costs = nightNum * 32;
      } else if (dates === "28-31") {
            costs = nightNum * 39;
      }
    break;
  case "Germany":
        if (dates === "21-23") {
            costs = nightNum * 32; 
      } else if (dates === "24-27") {
            costs = nightNum * 37;
      } else if (dates === "28-31") {
            costs = nightNum * 43;
      }
    break;
  }
  
  console.log(`Easter trip to ${destination} : ${costs.toFixed(2)} leva.`);
}
easterTrip(["France", "28-31", "8"]);