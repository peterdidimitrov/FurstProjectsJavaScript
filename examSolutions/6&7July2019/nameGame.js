function nameGame(input) {
    let index = 0;
    let command = input[index];
    index++;

    let winnerName = "";
    let name = "";
    let winerScore = 0;

    while (command !== "Stop") {
        name = command;
        let playerScore = 0;

        for (let i = 0; i < name.length; i++) {
            let num = Number(input[index]);
            index++;

            if (num === name[i].charCodeAt(0)) {
                playerScore += 10;
            } else {
                playerScore += 2;
            }
        }
        if (playerScore >= winerScore) {
            winnerName = name;
            winerScore = playerScore;
        }

        command = input[index];
        index++;
    }
    console.log(`The winner is ${winnerName} with ${winerScore} points!`);


}
nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);