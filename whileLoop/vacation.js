function vacation(input) {
    let index = 0;
    let moneyForVacation = Number(input[index]);
    index++;
    let curentMoney = Number(input[index]);
    index++;


    let spendDayCount = 0;
    let dayCount = 0;
    let isPosableToSaveMoney = true;

    while (moneyForVacation > curentMoney) {
        dayCount++;
        let action = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        switch (action) {
            case "spend":
                curentMoney -= money;
                spendDayCount++;
                break;
            case "save":
                curentMoney += money;
                spendDayCount = 0;
        }
        if (curentMoney < 0) {
            curentMoney = 0;
            
        }
        if (spendDayCount === 5) {
            console.log("You can't save the money.");
            console.log(`${dayCount}`);
            isPosableToSaveMoney = false;
            break;
        }
    }
    if (isPosableToSaveMoney) {
        console.log(`You saved the money for ${dayCount} days.`);
    }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);