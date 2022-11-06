function movieStars(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let isTheBudgetEnought = true;

    while (command !== "ACTION") {
        let currentActor = command;
        let currentHonorar = 0;
        if (currentActor.length <= 15) {
            currentHonorar = Number(input[index]);
            index++;
            budget -= currentHonorar;
        } else {
            currentHonorar = budget * 0.20;
            budget -= currentHonorar;
        }
        if (budget <= 0) {
            isTheBudgetEnought = false;
            console.log(`We need ${(Math.abs(budget)).toFixed(2)} leva for our actors.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (isTheBudgetEnought) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
}
movieStars(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);