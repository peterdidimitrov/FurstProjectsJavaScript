function easterGuests(input) {
    let guestsNum = Number(input[0]);
    let budget = Number(input[1]);

    let kozunakNum = Math.ceil(guestsNum / 3);
    let eggsNum = guestsNum * 2;
    let kozunakPrice = kozunakNum * 4;
    let eggsPrice = eggsNum * 0.45;
    let totalMoney = kozunakPrice + eggsPrice;
    let diference = budget - totalMoney;

    if (totalMoney <= budget) {
        console.log(`Lyubo bought ${kozunakNum} Easter bread and ${eggsNum} eggs.`);
        console.log(`He has ${diference.toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`)
        console.log(`He needs ${Math.abs(diference).toFixed(2)} lv. more.`);
    }
  }
  easterGuests(["9", "12"]);  