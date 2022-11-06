function lunchBreak(input) {
    let name = input[0];
    let durationOfMovie = Number(input[1]);
    let durationOfBreak = Number(input[2]);
    
    let timeForLunch = durationOfBreak * 1/8;
    let timeForRest = durationOfBreak * 1/4;
    let difference = durationOfBreak - timeForLunch - timeForRest;
    let freeTime = difference - durationOfMovie;
    
    if (difference >= durationOfMovie) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(Math.abs(freeTime))} more minutes.`);
    }
}
lunchBreak(["Teen Wolf", "48", "60"]);