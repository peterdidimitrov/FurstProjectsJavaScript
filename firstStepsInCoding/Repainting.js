function Repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let houersOfwork = Number(input[3]);
  
    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + (paint * 0.10)) * 14.50;
    let thinnerPrice = thinner * 5.00;
    let plasticBag = 0.40;
    
    let moneyFormaterials = nylonPrice + paintPrice + thinnerPrice + plasticBag;
    let moneyForwork = (moneyFormaterials * 0.30) * houersOfwork;
    let totalMoney = moneyFormaterials + moneyForwork;
    console.log(totalMoney);
}
Repainting(['10', '11', '4', '8']);