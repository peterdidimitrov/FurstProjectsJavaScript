function oscars(input) {
    let index = 0;
    let nameActor = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let numAsses = Number(input[index]);
    index++;

    let maxPoints = 1250.5;

    let isThePointsAreEnouthg = false;

    for (let i = 0; i < numAsses; i++) {
        let nameAsses = input[index];
        index++;
        let pointsFromActor = Number(input[index]);
        index++;

        currentPoints = nameAsses.length * pointsFromActor / 2;
        points += currentPoints;
        if (points >= maxPoints) {
            isThePointsAreEnouthg = true;
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }

    }
    let diff = Math.abs(points - maxPoints);
    if (!isThePointsAreEnouthg) {
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);