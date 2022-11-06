function fruitShop(input) {
    let price = 0;
let productName = input[0];
let day = input[1];
let quantity = Number(input[2]);
let totalPrice = price * quantity;
    switch (day) {
        case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        if (productName === "banana"){
            price = (quantity * 2.50).toFixed(2);
        } else if (productName === "apple") {
                price = (quantity * 1.20).toFixed(2);
            } else if (productName === "orange") {
                price = (quantity * 0.85).toFixed(2);
            } else if (productName === "grapefruit") {
                price = (quantity * 1.45).toFixed(2);
            } else if (productName === "kiwi") {
                price = (quantity * 2.70).toFixed(2);
            } else if (productName === "pineapple") {
                price = (quantity * 5.50).toFixed(2);
            } else if (productName === "grapes") {
                price = (quantity * 3.85).toFixed(2);
            } else {
            price = "error";
        } break;
        case "Saturday":
    case "Sunday":
        if (productName === "banana"){
            price = (quantity * 2.70).toFixed(2);
        } else if (productName === "apple") {
                price = (quantity * 1.25).toFixed(2);
            } else if (productName === "orange") {
                price = (quantity * 0.90).toFixed(2);
            } else if (productName === "grapefruit") {
                price = (quantity * 1.60).toFixed(2);
            } else if (productName === "kiwi") {
                price = (quantity * 3.00).toFixed(2);
            } else if (productName === "pineapple") {
                price = (quantity * 5.60).toFixed(2);
            } else if (productName === "grapes") {
                price = (quantity * 4.20).toFixed(2);
            } else {
            price = "error";
        } break;
   default:
            price = "error"; break;
 }   
 console.log(price);
}
fruitShop(["apple", "Workday", "0.5"]);