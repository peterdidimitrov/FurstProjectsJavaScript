function oldBooks(input) {
    let favoriteBook = input[0];
    let index = 1;
    let bookIsFound = false;
    let nextBookname = input[index];

    while (nextBookname !== "No More Books") {
        if (nextBookname === favoriteBook) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBookname = input[index];
    }
    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`)
    }
}
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);