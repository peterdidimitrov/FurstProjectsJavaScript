function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;

    let max = Number.MIN_SAFE_INTEGER;
    let namePlayer = "";

    while (command !== "END") {
        namePlayer = command;
        let tempGoal = Number(input[index]);
        index++;

        if (tempGoal > max) {
            max = tempGoal;
        }

        if (tempGoal >= 10) {
            break;
        }
        command = input[index];
        index++;
    }
    console.log(`${namePlayer} is the best player!`);
    if (max >= 3) {
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${max} goals.`);
    }
}
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);