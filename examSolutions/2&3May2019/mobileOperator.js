function mobileOperator (input) {
    let term = input[0];
  let type = input[1];
  let internet = input[2];
  let monthNum = Number(input[3]);
  
  let price = 0;
  
  switch (term) {
  case "one":
        if (type === "Small") {
            price = 9.98; 
      } else if (type === "Middle") {
            price = 18.99;
      } else if (type === "Large") {
            price = 25.98;
      } else if (type === "ExtraLarge") {
            price = 35.99;
      }
  break;
  case "two":
        if (type === "Small") {
            price = 8.58;
      } else if (type === "Middle") {
            price = 17.09;
      } else if (type === "Large") {
            price = 23.59;
        } else if (type === "ExtraLarge") {
            price = 31.79;
      }
    break;
  }
  
  if (internet === "yes" && price <= 10) {
        price += 5.50;
  } else if (internet === "yes" && price <= 30) {
            price += 4.35;
  } else if (internet === "yes" && price > 30) {
            price += 3.85;
  }
  
  let totalSum = monthNum * price;
  if (term === "two") {
  totalSum = totalSum * 0.9625;
  }
  
  console.log(`${totalSum.toFixed(2)} lv.`);
}
mobileOperator(["two", "Large", "no", "10"]);