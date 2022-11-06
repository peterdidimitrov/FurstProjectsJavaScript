function walking(input) {
    let index = 0;
    let goal = 10000;
    let command = input[index];
    index++;

    let steps = 0;

    while (command !== "Going home") {
        let tempSteps = Number(command);
        steps += tempSteps;

        if (steps >= goal) {
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Going home") {
        let tempSteps = Number(input[index]);
        index++;
        steps += tempSteps;
    }
    let diff = Math.abs(steps - goal);
    if (goal <= steps) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`)
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);