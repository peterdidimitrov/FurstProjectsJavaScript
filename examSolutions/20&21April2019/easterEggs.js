function easterEggs (input) {
    let numEggs = Number(input[0]);
    let index = 1;
    
    
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
      let greenEggs = 0;
    
    let maxColor = "";
    let maxEggs = Number.MIN_SAFE_INTEGER;
    
    for (let i =  0; i < numEggs; i ++) {
          let color = input[index];
          index++;
        
          switch (color) {
        case "red":
              redEggs++;
            if (redEggs > maxEggs) {
            maxEggs = redEggs;
            maxColor += color;
            maxColor = "";
            maxColor += color;
            }
        break;
        case "orange":
              orangeEggs++;
            if (orangeEggs > maxEggs) {
            maxEggs = orangeEggs;
            maxColor += color;
            maxColor = "";
            maxColor += color;
            }
        break;
        case "blue":
              blueEggs++;
            if (blueEggs > maxEggs) {
            maxEggs = blueEggs;
            maxColor += color;
            maxColor = "";
            maxColor += color;
            }
        break;
        case "green":
              greenEggs++;
            if (greenEggs > maxEggs) {
            maxEggs = greenEggs;
            maxColor += color;
            maxColor = "";
            maxColor += color;
            }
        break;
        }
    }
    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxColor}`);
  }
  easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);