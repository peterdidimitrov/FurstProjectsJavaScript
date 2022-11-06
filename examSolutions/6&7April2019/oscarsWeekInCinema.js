function oscarsWeekInCinema(input) {
    let nameFilm = input[0];
    let type = input[1];
    let numTickets = Number(input[2]);

    let price = 0;

    switch (nameFilm) {
        case 'A Star Is Born':
            switch (type) {
                case 'normal':
                    price += 7.50;
                    break;
                case 'luxury':
                    price += 10.50;
                    break;
                case 'ultra luxury':
                    price += 13.50;
                    break;
            }
            break;
        case 'Bohemian Rhapsody':
            switch (type) {
                case 'normal':
                    price += 7.35;
                    break;
                case 'luxury':
                    price += 9.45;
                    break;
                case 'ultra luxury':
                    price += 12.75;
                    break;
            }
            break;
        case 'Green Book':
            switch (type) {
                case 'normal':
                    price += 8.15;
                    break;
                case 'luxury':
                    price += 10.25;
                    break;
                case 'ultra luxury':
                    price += 13.25;
                    break;
            }
            break;
        case 'The Favourite':
            switch (type) {
                case 'normal':
                    price += 8.75;
                    break;
                case 'luxury':
                    price += 11.55;
                    break;
                case 'ultra luxury':
                    price += 13.95;
                    break;
            }
            break;
    }
    let totalSum = numTickets * price;
    console.log(`${nameFilm} -> ${totalSum.toFixed(2)} lv.`);
}
oscarsWeekInCinema(["Green Book", "normal", "63"]);