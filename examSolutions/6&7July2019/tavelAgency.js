function tavelAgency(input) {
    let city = input[0];
    let packType = input[1];
    let discount = input[2];
    let days = Number(input[3]);
   
    let priceTot = 0;
    let price = 0;
    let isPositive = true;
    let isOK = true;
    
   
    if (city === "Bansko" || city === "Borovets") {
      if (packType === "withEquipment") {
        price = 100;
        if (discount === "yes") {
          price = price * 0.90;
          } 
      } else if (packType === "noEquipment") {
        price = 80;
        if (discount === "yes") {
          price = price * 0.95;
          }
      } else {
        isOK = false;
        }
    } else if (city === "Varna" || city === "Burgas") {
       if (packType === "withBreakfast") {
        price = 130;
        if (discount === "yes") {
          price = price * 0.88;
          }
      } else if (packType === "noBreakfast") {
        price = 100;
        if (discount === "yes") {
          price = price * 0.93;
          }
      } else {
        isOK = false;
        }
    } else {
      isOK = false;
    }
    
    priceTot = price * days;
    if (days > 7) {
      priceTot = price * (days - 1);
      }
   
      if (days < 1) {
          isPositive = false;
    }
   
    if (isOK && isPositive){
      console.log(`The price is ${priceTot.toFixed(2)}lv! Have a nice time!`);
    } else if (!isPositive){
          console.log(`Days must be positive number!`);
    } else {
      console.log("Invalid input!");
    }
  }
  tavelAgency(["Gabrovo", "noBreakfast", "no", "3"]);