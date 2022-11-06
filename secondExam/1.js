function solve(input) {
    
    let videoCardPrice = Number(input[0]);
    let traspherPrice = Number(input[1]);
    let electrPerDay = Number(input[2]);
    let profitFromOneVCardPerDay = Number(input[3]);

    let totalSumForVC = videoCardPrice * 13;
    let totalSumForTranspher = traspherPrice * 13;

    let totalSum = totalSumForVC + totalSumForTranspher + 1000;
    let totalProfitFromVC = profitFromOneVCardPerDay - electrPerDay;
    
    let totalProfit = totalProfitFromVC * 13;

    let timeForBack = totalSum / totalProfit;

    
    
    console.log(`${totalSum}`);
    console.log(`${Math.ceil(timeForBack)}`);
}
solve(["800",
"10",
"0.32",
"6.4"])
;