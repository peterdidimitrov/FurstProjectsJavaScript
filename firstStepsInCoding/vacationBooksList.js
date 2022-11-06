function vacationBooksList(input) {
    let pages = Number(input[0]);
    let pagesForHouer = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let houersOfReadPerDay = (pages / pagesForHouer) / numberOfDays;
    console.log(houersOfReadPerDay);
}
vacationBooksList(['212', '20', '2']);