function movieDay(input) {
    let time = Number(input[0]);
    let sceneNum = Number(input[1]);
    let timeForScene = Number(input[2]);
    let preparingTime = time * 0.15;

    let timeForShooting = sceneNum * timeForScene;
    let totalTime = timeForShooting + preparingTime;
    
    let diference = time - totalTime;

    if (totalTime <= time) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(diference)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.abs(diference)} minutes.`);
    }
    
  }
  movieDay(["120", "10", "11"]);