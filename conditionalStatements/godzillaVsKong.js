function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let extraActors = Number(input[1]);
  let outfitForOnActor = Number(input[2]);

  let moneyForDecor = budget * 0.1;
  let moneyForOutfit = extraActors * outfitForOnActor;

  if (extraActors > 150) {
    moneyForOutfit = moneyForOutfit - moneyForOutfit * 0.1;
  }

  let moneyForFilm = moneyForDecor + moneyForOutfit;
  let difference = budget - moneyForFilm;

  if (difference < 0) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${Math.abs(difference).toFixed(2)} leva more.`);
  }
  if (difference >= 0) {
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${difference.toFixed(2)} leva left.`
    );
  }
}
godzillaVsKong(["9587.88", "222", "55.68"]);
