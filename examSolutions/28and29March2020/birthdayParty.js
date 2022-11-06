function birthdayParty(rent) {
    rent = Number(rent);
    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let clown = rent * 1/3;
 
    let sum = rent + cake + drinks + clown;
    
    console.log(sum);
  }