function oscars(input) {
  let index = 0;
  let name = input[index];
  index++;
  let points = Number(input[index]);
  index++;
  let count = Number(input[index]);
  index++;

  let isNominee = false;

  for (i = 0; i < count; i++) {
    let currentName = input[index];
    index++;
    let tempPoints = Number(input[index]);
    index++;
    let res = (currentName.length * tempPoints) / 2;
    points += res;


    if (points > 1250) {
      isNominee = true;
      console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
      break;
    }
  }
  if (!isNominee) {
    let diff = Math.abs(points - 1250.5);
    console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
  }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);