function  yardGreening(input) {
    let area = input[0];
  let price = area * 7.61;
  let discount = price * 0.18;
  let finalPrice = (area * 7.61) - discount;
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
yardGreening(['550']);