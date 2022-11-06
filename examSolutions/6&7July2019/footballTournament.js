function footballTournament(input) {
    let index = 0;
    let name = input[index];
    index++;
    let gameNum = Number(input[index]);
    index++;
    let result = input[index];
    index++;

    let winCounter = 0;
    let drawCounter = 0;
    let loseCounter = 0;

    let score = 0;

    while (index <= gameNum + 2) {
        let currentGame = result;
        switch (currentGame) {
            case "W":
                winCounter++;
                score += 3;
                break;
            case "D":
                drawCounter++;
                score += 1;
                break;
            case "L":
                loseCounter++;
                break;
        }
        result = input[index];
        index++;
    }

    let persentWinGame = winCounter / gameNum * 100;

    if (gameNum === 0) {
        console.log(`${name} hasn't played any games during this season.`);
    } else {
        console.log(`${name} has won ${score} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${winCounter}`);
        console.log(`## D: ${drawCounter}`);
        console.log(`## L: ${loseCounter}`);
        console.log(`Win rate: ${persentWinGame.toFixed(2)}%`);
    }
}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);