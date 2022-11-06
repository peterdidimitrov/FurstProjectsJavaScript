function poolDay(input) {
  let people = Number(input[0]);
  let tax = Number(input[1]);
  let sunbedPrice = Number(input[2]);
  let unbrelaPrice = Number(input[3]);

  let totalPriceSunbed = sunbedPrice * Math.ceil(people * 0.75);
  let totalPriceUnbrela = unbrelaPrice * Math.ceil(people / 2);
  let totalMoney = people * tax + totalPriceSunbed + totalPriceUnbrela;
  console.log(totalMoney.toFixed(2) + ' lv.');
}
poolDay(["50", "6", "8", "4"]);
