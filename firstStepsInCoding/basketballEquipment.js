function basketballEquipment(input) {
    //tax
    let feeForYear = Number(input[0]);
    
    //prices
    let shoes = feeForYear - feeForYear * 0.40;
    let sportClothing = shoes - shoes * 0.20;
    let ball = sportClothing * 0.25;
    let accessories = ball * 0.20;
    
    //total money for sport
    let totalMoney = feeForYear + shoes + sportClothing + ball + accessories;
    console.log(totalMoney);
}
basketballEquipment(['365']);