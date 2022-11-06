function renovation (input){
    let index = 0;
  let high = Number(input[index]);
  index++;
  let wide = Number(input[index]);
  index++;
  let percent = Number(input[index]) / 100;
  index++;
  let command = input[index];
  index++;
  
  let area = Math.ceil((high * wide * 4) - (high * wide * 4) * percent);
  let curentPaintedArea = 0;
  let isPaintEnough = false;
 
  while (command !== "Tired!") {
        let paintLiters = Number(command);
      curentPaintedArea += paintLiters;
      
        if (curentPaintedArea >= area) {
      isPaintEnough = true;
      break;
        }
        command = input[index];
        index++;
    } 
  let diff = curentPaintedArea - area;  
  
  if (diff > 0) {
    console.log(`All walls are painted and you have ${diff} l paint left!`);
  } else if (diff === 0) {
    console.log(`All walls are painted! Great job, Pesho!`);
  }
  if (!isPaintEnough) {
    console.log(`${Math.abs(diff)} quadratic m left.`);
  }
}
renovation(["2", "3", "25", "3", "7", "8"]);