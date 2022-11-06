function vetParking (input) {
    let days = Number(input[0]);
  let houersForDay = Number(input[1]);
  
  
  let sumForAllDay = 0;
  
  
  for (let dayIndex = 1; dayIndex <= days; dayIndex++) {
        let sumForDay = 0;
        for (let houerIndex = 1; houerIndex <= houersForDay; houerIndex++){
            if (dayIndex % 2 === 0 && houerIndex % 2 === 1) {
                    sumForDay += 2.50;
          } else if (dayIndex % 2 === 1 && houerIndex % 2 === 0) {
                sumForDay += 1.25;
          } else {
                sumForDay += 1;
          }
      }
      
        sumForAllDay += sumForDay;
      console.log(`Day: ${dayIndex} - ${sumForDay.toFixed(2)} leva`);
  }  
    console.log(`Total: ${sumForAllDay.toFixed(2)} leva`);
}
vetParking(["5", "2"]);