function solve(input) {
    let index = 0;
    let command = input[index];
    index++;

    let kidsCounter = 0;
    let adultCounter = 0;
    let moneyForToys = 0;
    let moneForSweaters = 0;

    while (command !== "Christmas") {
        let age = Number(command);

        if (age >= 1 && age <= 16) {
            kidsCounter++;
            moneyForToys += 5;
        } else {
            adultCounter++;
            moneForSweaters += 15;
        }
        command = input[index];
        index++;
    }
    console.log(`Number of adults: ${adultCounter}`);
    console.log(`Number of kids: ${kidsCounter}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneForSweaters}`);
    
}
solve(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"])

;