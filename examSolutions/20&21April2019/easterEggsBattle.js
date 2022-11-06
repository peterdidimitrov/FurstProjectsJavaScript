function easterEggsBattle (input) {
    let playerOneEggs = Number(input[0]);
  let playerTwoEggs = Number(input[1]);
  
  let index = 2;
  let winner = input[index];
  index++;
  
  while (winner !== "End") {
        if (winner === "one") {
            playerTwoEggs--;
      } else if (winner === "two") {
            playerOneEggs--;
      }
     
      if (playerOneEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`);
        break;
        }
        if (playerTwoEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`);
        break;
        } 
        winner = input[index];
            index++;
      
  }
  if (winner === "End") {
        console.log(`Player one has ${playerOneEggs} eggs left.`);
        console.log(`Player two has ${playerTwoEggs} eggs left.`);
  }
}
easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End"]);