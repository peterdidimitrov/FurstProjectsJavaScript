function favoriteMovie(input) {
    let index = 0;
    let nameFilm = input[index];
    index++;

    let theWinner = "";
    let sumPoints = 0;
    let filmCounter = 0;

    while (nameFilm !== "STOP") {
        let currentName = nameFilm;
        let points = 0;
        filmCounter++;
        for (let i = 0; i < currentName.length; i++) {
            let currentLetter = currentName[i].charCodeAt(0);
            points += currentLetter;
            if (currentLetter > 96 && currentLetter < 123) {
                points = points - currentName.length * 2;
            } else if (currentLetter > 64 && currentLetter < 91) {
                points -= currentName.length;
            }
        }

        if (points >= sumPoints) {
            theWinner = currentName;
            sumPoints = points;
        }
        if (filmCounter === 7) {
            console.log("The limit is reached.");
            break;
        }
        nameFilm = input[index];
        index++;
    }
    console.log(`The best movie for you is ${theWinner} with ${sumPoints} ASCII sum.`);

}
favoriteMovie(["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"]);