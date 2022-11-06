function worldSwimmingRecord(input) {
  let recordInSeconds = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeInSecondsForOneMeters = Number(input[2]);

  let timeForAllDistance =
    distanceInMeters * timeInSecondsForOneMeters +
    Math.floor(distanceInMeters / 15) * 12.5;

  let difference = timeForAllDistance - recordInSeconds;

  if (timeForAllDistance < recordInSeconds) {
    console.log(
      `Yes, he succeeded! The new world record is ${timeForAllDistance.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${difference.toFixed(2)} seconds slower.`
    );
  }
}
worldSwimmingRecord(["10464", "1500", "20"]);
