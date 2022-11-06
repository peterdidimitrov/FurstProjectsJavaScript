function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let sumPrimeNum = 0;
    let sumNonPrimeNum = 0;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        if (currentNum === 1) {
            sumPrimeNum++;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimeNum += currentNum;
        } else {
            sumNonPrimeNum += currentNum;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`);
}
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);