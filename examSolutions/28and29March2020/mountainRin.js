function mountainRun(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsForOneMeter = Number(input[2]);
    
    let timeForAllDistance = (distanceInMeters * timeInSecondsForOneMeter) + 
    (Math.floor(distanceInMeters / 50) * 30);
 
    let difference = timeForAllDistance - recordInSeconds;
 
    if (timeForAllDistance < recordInSeconds) {
        console.log(`Yes! The new record is ${(timeForAllDistance).toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(difference).toFixed(2)} seconds slower.`);
    }
}
  mountainRun(["1377", "389", "3"]);