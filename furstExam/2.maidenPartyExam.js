function maidenParty(input) {

  let maidenPartyPrice = Number(input[0]);
  let numLoveLetter = Number(input[1]);
  let roses = Number(input[2]);
  let keys = Number(input[3]);
  let pic = Number(input[4]);
  let luckSup = Number(input[5]);

  let allArtic = numLoveLetter + roses + keys + pic + luckSup;
  let totalLoveLetter = numLoveLetter * 0.60;
  let totalRoses = roses * 7.20;
  let totalPic = pic * 18.20;
  let totalKeys = keys * 3.60;
  let totalLuckSup = luckSup * 22;

  sum = totalLoveLetter + totalRoses + totalPic + totalKeys + totalLuckSup;
  
  if (allArtic > 25) {
      sum = sum * 0.65;
  }

  let totalSum = sum * 0.90;


  diff = Math.abs(maidenPartyPrice - totalSum);

  if (totalSum >= maidenPartyPrice) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }

}
maidenParty(["320", "8", "2", "5", "5", "1"]);
