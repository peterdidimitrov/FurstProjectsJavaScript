function pcGameShop (input){
    let index = 0;
  let n = Number(input[index]);
  index++;
  let gameName = input[index];
  index++;
  
  let hearthstone = 0;
  let fornite = 0;
  let overwatch = 0;
  let others = 0;
 
  while (index <= n + 1) {
        let currentGame = gameName;
      switch (currentGame) {
      case "Hearthstone":
      hearthstone++;
      break;
      case "Fornite":
      fornite++;
      break;
      case "Overwatch":
      overwatch++;
      break;
      default:
      others++;
      break;
      }
        gameName = input[index];
        index++;
    } 
  let hearthstonePers = hearthstone / n * 100;
  let fornitePers = fornite / n * 100;
  let overwatchPers = overwatch / n * 100;
  let othersPers = others / n * 100;
  
    console.log(`Hearthstone - ${hearthstonePers.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePers.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPers.toFixed(2)}%`);
    console.log(`Others - ${othersPers.toFixed(2)}%`);
}
pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);