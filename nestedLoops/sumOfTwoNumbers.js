function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let countCombinations = 0;
    let isFoundCombination = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            countCombinations++;
            if (x + y === magicNum) {

                console.log(`Combination N:${countCombinations} (${x} + ${y} = ${magicNum})`);
                isFoundCombination = true;
                break;
            }
        }
        if (isFoundCombination) {
            break;
        }
    }
    if (!isFoundCombination) {
        console.log(`${countCombinations} combinations - neither equals ${magicNum}`);
    }

}
sumOfTwoNumbers(["23", "24", "20"]);