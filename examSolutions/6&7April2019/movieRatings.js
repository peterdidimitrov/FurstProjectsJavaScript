function movieRatings(input) {
    let index = 0;
    let numMovies = Number(input[index]);
    index++;

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;


    let nameHighestRatingFilm = "";
    let nameLowestRatingFilm = "";
    let sumRaring = 0;

    for (let i = 0; i < numMovies; i++) {
        let currentMovie = input[index];
        index++;
        let currentRating = Number(input[index]);
        index++;
        sumRaring += currentRating

        if (currentRating > max) {
            max = currentRating;
            nameHighestRatingFilm += currentMovie;
            nameHighestRatingFilm = "";
            nameHighestRatingFilm += currentMovie;
        } else if (currentRating < min) {
            min = currentRating;
            nameLowestRatingFilm += currentMovie;
            nameLowestRatingFilm = "";
            nameLowestRatingFilm += currentMovie;
        }
    }



    let avg = sumRaring / numMovies;
    console.log(`${nameHighestRatingFilm} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${nameLowestRatingFilm} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${avg.toFixed(1)}`);
}
movieRatings(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);