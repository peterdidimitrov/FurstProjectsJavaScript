function easterShop (input) {
    let numEggsInShop = Number(input[0]);
  let index = 1;
  let command = input[index];
  index++;
  
  let soldEggs = 0;
  
  
  while (command !== "Close") {
        let tempcommand = command;
      let numEggs = Number(input[index]);
      index++;
      
        if (tempcommand === "Buy") {
            if (numEggs > numEggsInShop) {
                    console.log("Not enough eggs in store!");
                console.log(`You can buy only ${numEggsInShop}.`);
                break;
        }
          numEggsInShop -= numEggs;
          soldEggs += numEggs;
      } else if (tempcommand === "Fill") {
            numEggsInShop += numEggs;
      }
    
      
        command = input[index];
            index++;
      
  }
  if (command === "Close") {
        console.log("Store is closed!");
        console.log(`${soldEggs} eggs sold.`);
  }
}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);