function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let productCounter = 0;
    let sumMoney = 0;



    while (command !== "Stop") {
        let nemeProdut = command;
        let productPrice = Number(input[index]);
        index++;
        productCounter++;
        if (productCounter % 3 === 0) {
            productPrice = productPrice / 2;
        }
        sumMoney += productPrice;
        budget -= productPrice;

        if (budget < 0) {
            let diff = Math.abs(budget);
            console.log("You don't have enough money!");
            console.log(`You need ${diff.toFixed(2)} leva!`);
            break;
        }

        command = input[index];
        index++;
    }
    if (command === "Stop") {
        console.log(`You bought ${productCounter} products for ${sumMoney.toFixed(2)} leva.`);
    }
}
touristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"]);