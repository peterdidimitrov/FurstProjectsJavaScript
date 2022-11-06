function club (input){
    let index = 0;
  let profitTarget = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let profit = 0;
 
    while (command !== 'Party!') {
        let drink = Number(command.length);
      let price = Number(input[index]);
      index++;
      let curentDrink = 0;
      
      curentDrink = price * drink;
     
        if (curentDrink % 2 === 1) {
            curentDrink = curentDrink * 0.75;
      }
      
      profit += curentDrink;
        if (profit >= profitTarget) {
      break;
        }
        command = input[index];
        index++;
}
let diff = Math.abs(profitTarget - profit);
if (profit >= profitTarget) {
    console.log(`Target acquired.`);
    console.log(`Club income - ${profit.toFixed(2)} leva.`);
} else {
    console.log(`We need ${diff.toFixed(2)} leva more.`);
  console.log(`Club income - ${profit.toFixed(2)} leva.`);
}
}
 
club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);