function solve(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let higth = Number(input[2]);
    let avgHigthAstronaut = Number(input[3]);

    let racketVolume = width * length * higth;
    let roomVolume = (avgHigthAstronaut + 0.40) * 2 * 2;
    let people = Math.floor(racketVolume / roomVolume);  

    
    if (people >= 3 && people <= 10) {
        console.log(`The spacecraft holds ${people} astronauts.`);
    } else if (people < 3) {
      console.log("The spacecraft is too small.");
    } else {
      console.log("The spacecraft is too big.");
    }
  }
  solve(["3",
  "3", 
  "4",
  "1.80"])
  
  ;
  