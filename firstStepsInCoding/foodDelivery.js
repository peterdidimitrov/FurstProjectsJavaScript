function foodDelivery(input) {
    //menus
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);
    
    //prices
    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegMenuPrice = vegMenu * 8.15;
    let allMenuPrice = chickenMenuPrice + fishMenuPrice + vegMenuPrice;
    let dessertPrise = allMenuPrice * 0.20;
    let delivery = 2.50;
    
    //total money for food
    let moneyForFood = chickenMenuPrice + fishMenuPrice + vegMenuPrice + dessertPrise + delivery;
    console.log(moneyForFood);
}
foodDelivery(['2', '4', '3']);