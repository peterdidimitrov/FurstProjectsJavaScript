function shopping(input) {
  let budget = Number(input[0]);
  let videoCarts = Number(input[1]);
  let processors = Number(input[2]);
  let ram = Number(input[3]);

  //money
  let moneyForVideoCarts = videoCarts * 250;
  let moneyForProcessors = processors * (moneyForVideoCarts * 0.35);
  let moneyForRam = ram * (moneyForVideoCarts * 0.1);

  let sum = moneyForVideoCarts + moneyForProcessors + moneyForRam;
  let difference = budget - sum;

  if (videoCarts > processors) {
    sum = sum - sum * 0.15;
    difference = budget - sum;
  }
  if (budget >= sum) {
    console.log(`You have ${difference.toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${Math.abs(difference).toFixed(2)} leva more!`
    );
  }
}
shopping(["900", "1", "2", "3"]);
