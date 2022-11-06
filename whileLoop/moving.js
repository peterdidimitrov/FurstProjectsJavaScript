function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let emptySpase = width * length * height;

    let index = 3;
    let command = input[index];
    index++;

    let isTheSpaseEnough = true;

    while (command !== "Done") {
        let curentSpase = Number(command);
        emptySpase -= curentSpase;
        if (emptySpase < 0) {
            let diff = Math.abs(emptySpase);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            isTheSpaseEnough = false;
            break;
        }
        command = input[index];
        index++;
    }
    if (isTheSpaseEnough) {
        console.log(`${emptySpase} Cubic meters left.`);
    }
}
moving(["10", "1", "2", "4", "6", "Done"]);