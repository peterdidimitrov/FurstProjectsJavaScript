function skeleton(input) {
    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let lengthRamp = Number(input[2]);
    let secondsFor100M = Number(input[3]);

    let controlTimeInSeconds = controlMinutes * 60 + controlSeconds;
    let timeReduce = (lengthRamp / 120) * 2.5;
    let marinsTime = (lengthRamp / 100) * secondsFor100M - timeReduce;
    let diference = controlTimeInSeconds - marinsTime;

    if (marinsTime <= controlTimeInSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${marinsTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${Math.abs(diference.toFixed(3))} second slower.`);
    }
    
  }
  skeleton(["1", "20", "1546", "12"]);