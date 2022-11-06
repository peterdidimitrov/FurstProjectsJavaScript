function easterBake (input) {
    let numEasterBake = Number(input[0]);
    let index = 1;
    
    let allSugar = 0;
    let allFlour = 0;
    
   
   
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;
    
    for (let i =  0; i < numEasterBake; i ++) {
          let sugar = Number(input[index]);
          index++;
        let flour = Number(input[index]);
        index++;
        
        allSugar += sugar;
        allFlour += flour;
        
          if (sugar > maxSugar) {
            maxSugar = sugar;
        }
            
        if (flour > maxFlour) {
            maxFlour = flour;
        }
     
    }
    
    let sugsrPac = allSugar / 950;
    let flourPac = allFlour / 750;
    console.log(`Sugar: ${Math.ceil(sugsrPac)}`);
    console.log(`Flour: ${Math.ceil(flourPac)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
   
  }
  easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);