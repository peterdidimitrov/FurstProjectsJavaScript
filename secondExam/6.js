function solve(input) {
  let numLocations = input[0];
  let index = 1;

  for (let i = 1; i <= numLocations; i++) {
    let avgGold = Number(input[index]);
    index++;
    let days = Number(input[index]);
    index++;

    let sumGoldForLoc = 0;
    for (let j = 1; j <= days; j++) {
      let goldForDay = Number(input[index]);
      index++;
      sumGoldForLoc += goldForDay;
    }
    let avgGoldForDayForLoc = sumGoldForLoc / days;
    let diff = avgGold - avgGoldForDayForLoc;
    if (avgGoldForDayForLoc >= avgGold) {
      console.log(`Good job! Average gold per day: ${avgGoldForDayForLoc.toFixed(2)}.`);
    } else {
      console.log(`You need ${diff.toFixed(2)} gold.`);
    }
  }
}
solve(["1",
"5",
"3",
"10",
"1",
"3"])

  ;