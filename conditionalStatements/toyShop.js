function toyShop(input) {
  let travelPrice = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);
  let sum =
    puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
  let numberOfToys = puzzles + dolls + bears + minions + trucks;
  let profit = sum - sum * 0.1;

  if (numberOfToys >= 50) {
    profit = sum - sum * 0.25 - (sum - sum * 0.25) * 0.1;
  }
  if (profit >= travelPrice) {
    console.log(`Yes! ${(profit - travelPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(travelPrice - profit).toFixed(2)} lv needed.`
    );
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
