function smallShop(input) {
  let price = 0;
  let productName = input[0];
  let town = input[1];
  let quantity = Number(input[2]);
  if (town === "Sofia") {
    if (productName === "coffee") {
      price = quantity * 0.5;
    } else if (productName == "water") {
      price = quantity * 0.8;
    } else if (productName == "beer") {
      price = quantity * 1.2;
    } else if (productName == "sweets") {
      price = quantity * 1.45;
    } else if (productName == "peanuts") {
      price = quantity * 1.6;
    }
  } else if (town === "Plovdiv") {
    if (productName === "coffee") {
      price = quantity * 0.4;
    } else if (productName == "water") {
      price = quantity * 0.7;
    } else if (productName == "beer") {
      price = quantity * 1.15;
    } else if (productName == "sweets") {
      price = quantity * 1.3;
    } else if (productName == "peanuts") {
      price = quantity * 1.5;
    }
  } else if (town === "Varna") {
    if (productName === "coffee") {
      price = quantity * 0.45;
    } else if (productName == "water") {
      price = quantity * 0.7;
    } else if (productName == "beer") {
      price = quantity * 1.1;
    } else if (productName == "sweets") {
      price = quantity * 1.35;
    } else if (productName == "peanuts") {
      price = quantity * 1.55;
    }
  }
  console.log(price);
}
smallShop(["sweets", "Sofia", "2.23"]);
