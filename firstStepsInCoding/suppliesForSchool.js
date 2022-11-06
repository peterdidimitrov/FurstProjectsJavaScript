function suppliesForschool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningDetergent = Number(input[2]);
    let discount = Number(input[3]);
  
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let detergentPrice = cleaningDetergent * 1.20;
    let totalMoney = pensPrice + markersPrice + detergentPrice;
    let money = totalMoney - (totalMoney * (discount / 100));
    console.log(money);
}
suppliesForschool(['2', '3', '4', '25']);