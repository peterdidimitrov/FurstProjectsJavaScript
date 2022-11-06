function tennisEquipment(input) {
    let tennisRacketPrice = Number(input[0]);
    let tennisRacketNum = Number(input[1]);
    let shoesNum = Number(input[2]);

    let moneyForRackets = tennisRacketNum * tennisRacketPrice;
    let shoesPrice = tennisRacketPrice / 6;
    let moneyForShoes = shoesNum * shoesPrice;
    let moneyForEquipment = (moneyForRackets + moneyForShoes) * 0.2;
    let totalMoney = moneyForEquipment + moneyForRackets + moneyForShoes;
    let moneyDjokovic = totalMoney / 8;
    let moneySponsors = totalMoney * 7 / 8;
    
    console.log(`Price to be paid by Djokovic ${Math.floor(moneyDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(moneySponsors)}`);
  }
  tennisEquipment(["850","4", "2"]);