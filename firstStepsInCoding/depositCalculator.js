function  depositCalculator(input) {
    let deposit = Number(input[0]);
    let termОfDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let sum = deposit + termОfDeposit * ((deposit * (annualInterestRate / 100) / 12));
    console.log(sum);
}
depositCalculator(['200', '3', '5.7']);