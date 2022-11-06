function solve(input) {
    let index = 0;
    let catsNum = Number(input[index]);
    index++;
    

    let catsNumGroup1 = 0;
    let catsNumGroup2 = 0;
    let catsNumGroup3 = 0;

    let allFood = 0;
   
    

    for (let i = 0; i < catsNum; i++) {
        let foodInGramsForOneCat = Number(input[index]);
        index++;
        if (foodInGramsForOneCat >= 100 && foodInGramsForOneCat < 200) {
            catsNumGroup1++;
            allFood += foodInGramsForOneCat;
        } else if (foodInGramsForOneCat >= 200 && foodInGramsForOneCat < 300){
            catsNumGroup2++;
            allFood += foodInGramsForOneCat;
        } else if (foodInGramsForOneCat >= 300 && foodInGramsForOneCat <= 400) {
            catsNumGroup3++;
            allFood += foodInGramsForOneCat;
        }
    }
     let moneyForFood = (allFood / 1000) * 12.45;
   
    console.log(`Group 1: ${catsNumGroup1} cats.`);
    console.log(`Group 2: ${catsNumGroup2} cats.`);
    console.log(`Group 3: ${catsNumGroup3} cats.`);
    console.log(`Price for food per day: ${moneyForFood.toFixed(2)} lv.`);

}
solve(["6",
"102",
"236",
"123",
"399",
"342", 
"222"])
;