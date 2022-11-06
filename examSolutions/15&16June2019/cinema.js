function cinema(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let sitsCounter = 0;
    let sumMoney = 0;
    let ticketPrice = 5;

    while (command !== "Movie time!") {
        let currentPeople = Number(command);
        sitsCounter += currentPeople;
        if (sitsCounter > capacity) {
            console.log("The cinema is full.");
            break;
        }
        let currentSum = currentPeople * ticketPrice;
        if (currentPeople % 3 === 0) {
            currentSum -= 5;
        }
        sumMoney += currentSum;

        command = input[index];
        index++;
    }
    let diff = capacity - sitsCounter;
    if (command === "Movie time!") {
        console.log(`There are ${diff} seats left in the cinema.`);
    }


    console.log(`Cinema income - ${sumMoney} lv.`);
}
cinema(["50", "15", "10", "10", "15", "5"]);
// cinema(["100", "10", "10", "10", "10", "10","10", "10", "10", "10", "10", "Movie time!"]);