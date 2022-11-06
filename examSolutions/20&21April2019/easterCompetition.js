function easterCompetition (input) {
    let numEasterBake = Number(input[0]);
    let index = 1;
    
    
    let winnerName = "";
    let maxPoints = Number.MIN_SAFE_INTEGER;
    
    
    for (let i =  0; i < numEasterBake; i++) {
        let curentBakerName = input[index];
          index++;
        
        let points = input[index];
          index++;
        
        let totalCurentPoints = 0;
        
        while (points !== "Stop") {
                  let currentPoints = Number(points);
                  totalCurentPoints += currentPoints;
              
              points = input[index];
                      index++;
        }
              if (points === "Stop") {
                      console.log(`${curentBakerName} has ${totalCurentPoints} points.`);
            }
            
              console.log(`${curentBakerName} is the new number 1!`);
            
        if (totalCurentPoints > maxPoints) {
            maxPoints = totalCurentPoints;
            winnerName += curentBakerName;
            curentBakerName = "";
            winnerName += curentBakerName;
          }
          
        
    }
    console.log(`${winnerName} won competition with ${maxPoints} points!`);
    
  }
  easterCompetition(["2", "Chef Angelov", "9", "9",
  "9",
  "Stop",
  "Chef Rowe",
  "10",
  "10",
  "10",
  "10",
  "Stop"])
  ;