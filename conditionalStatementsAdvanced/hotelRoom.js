function hotelRoom(input) {
    let mounth = input[0];
    let nightsNum = Number(input[1]);
     
    let apartmentPrice = 0;
    let studioPrice = 0;
        
    switch (mounth) {
    case "May":
    case "October":
    apartmentPrice = 65;
    studioPrice = 50;
        if (nightsNum > 7 && nightsNum <= 14) {
            studioPrice = studioPrice * 0.95;
        } else if (nightsNum > 14) {
            studioPrice = studioPrice * 0.70;
        }
    break;
     
    case "June":
    case "September":
    apartmentPrice = 68.70;
    studioPrice = 75.20;
        if (nightsNum > 14) {
            studioPrice = studioPrice * 0.80;
        }
    break;
     
    case "July":
    case "August":
    apartmentPrice = 77;
    studioPrice = 76;
    break;
     
    }
    if (nightsNum > 14) {
        apartmentPrice = apartmentPrice * 0.90;
    }
    let sumApartment = apartmentPrice * nightsNum;
    let sumStudio = studioPrice * nightsNum;
     
    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
    }
    hotelRoom(["August","20"]);