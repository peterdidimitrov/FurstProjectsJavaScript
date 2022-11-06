function seriesCalculator(input) {
  let nameOfSeries = input[0];
  let seasonsNum = Number(input[1]);
  let episodes = Number(input[2]);
  let durationOfEpisode = Number(input[3]);

  let bonusTime = seasonsNum * 10;
  let commercialDuration = durationOfEpisode * 0.2;
  let calcTotal =
    (durationOfEpisode + commercialDuration) * episodes * seasonsNum +
    bonusTime;
  console.log(
    `Total time needed to watch the ${nameOfSeries} series is ${calcTotal} minutes.`
  );
}
seriesCalculator(["Riverdale", "3", "21", "45"]);
