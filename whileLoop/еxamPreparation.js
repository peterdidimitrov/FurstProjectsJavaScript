function еxamPreparation(input) {
    let index = 0;
    let negativeGrade = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let isNeedBreak = false;

    let countNegGrade = 0;
    let sumGrade = 0;
    let countProblems = 0;
    let taskName = "";


    while (command !== "Enough") {
        taskName = command;
        let tempGrade = Number(input[index]);
        index++;

        if (tempGrade <= 4) {
            countNegGrade++;
        }
        if (countNegGrade === negativeGrade) {
            isNeedBreak = true;
            console.log(`You need a break, ${countNegGrade} poor grades.`);
            break;
        }
        sumGrade += tempGrade;
        countProblems++;

        command = input[index];
        index++;
    }
    if (!isNeedBreak) {
        let avgScore = sumGrade / countProblems;
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${taskName}`);
    }


}
еxamPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);