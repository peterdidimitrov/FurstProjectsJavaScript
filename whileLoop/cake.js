function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let numCakePeases = width * length;

    let index = 2;
    let command = input[index];
    index++;

    let isThePeasesEnough = true;


    while (command !== "STOP") {
        let curentPieses = Number(command);
        numCakePeases -= curentPieses;
        if (numCakePeases < 0) {
            let diff = Math.abs(numCakePeases);
            console.log(`No more cake left! You need ${diff} pieces more.`);
            isThePeasesEnough = false;
            break;
        }
        command = input[index];
        index++;
    }
    if (isThePeasesEnough) {
        console.log(`${numCakePeases} pieces are left.`);
    }
}
cake(["10", "2", "2", "4", "6", "STOP"]);