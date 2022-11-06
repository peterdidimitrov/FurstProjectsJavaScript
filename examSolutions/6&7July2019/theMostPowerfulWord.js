function theMostPowerfulWord(input) {
    let index = 0;
    let command = input[index];
    index++;

    let theMostPowerfulWord = "";
    let strength = 0;

    while (command !== "End of words") {
        let currentWord = command;
        let powerful = 0;

        for (let i = 0; i < currentWord.length; i++) {
            powerful += currentWord[i].charCodeAt(0);
        }

        switch (currentWord[0]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "U":
            case "u":
            case "Y":
            case "y":
                powerful = powerful * currentWord.length;
                break;

            default:
                powerful = Math.floor(powerful / currentWord.length);
                break;
        }
        if (powerful >= strength) {
            theMostPowerfulWord = currentWord;
            strength = powerful;
        }

        command = input[index];
        index++;
    }
    console.log(`The most powerful word is ${theMostPowerfulWord} - ${strength}`);
}
theMostPowerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);