function numbersDivisibleBy9(input) {
    let sum = 0;
    let start = Number(input[0]);
    let end = Number(input[1]);
    let allNumbers = '';

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            allNumbers += `${i}\n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(allNumbers);
}
numbersDivisibleBy9(["100", "200"]);