function divisionWithoutRemainder(input) {
    let numNumbers = Number(input[0]);
    let index = 1;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let countNumbersDiv2 = 0;
    let countNumbersDiv3 = 0;
    let countNumbersDiv4 = 0;


    for (let n = 1; n <= numNumbers; n++) {
        let currentNumber = Number(input[index]);
        index++;
        if (currentNumber % 2 === 0) {
            countNumbersDiv2++;
        }
        if (currentNumber % 3 === 0) {
            countNumbersDiv3++;
        }
        if (currentNumber % 4 === 0) {
            countNumbersDiv4++;
        }
    }
    p1 = countNumbersDiv2 / numNumbers * 100;
    p2 = countNumbersDiv3 / numNumbers * 100;
    p3 = countNumbersDiv4 / numNumbers * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
divisionWithoutRemainder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);