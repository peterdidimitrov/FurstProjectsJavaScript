function fishTank(input) {
    //dimentions of tank
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    
    //calc of liters water
    let volumeFishTank = length * width * height;
    let volumeInLiters = volumeFishTank * 0.001;
    let occupiedSpace = percent / 100;
    let liters = volumeInLiters * (1 - occupiedSpace);
   
    console.log(liters);
}
fishTank(['85', '75', '47', '17']);