function  petShop(input) {
    let dogFood = input[0];
    let catFood = input[1];
    let total = (dogFood * 2.5) + (catFood * 4);
    console.log(`${total} lv.`);
}
petShop(['5', '4']);