function solve(input) {
    let catType = input[0];
    let catGender = input[1];

    let hummanMonts = 0;
    let isTheTipeFalse = false;

    

    switch (catGender) {
        case "m":
            if (catType === "British Shorthair") {
                hummanMonts = 13 * 12;
            } else if (catType === "Siamese") {
                hummanMonts = 15 * 12;
            } else if (catType === "Persian") {
                hummanMonts = 14 * 12;
            } else if (catType === "Ragdoll") {
                hummanMonts = 16 * 12;
            } else if (catType === "American Shorthair") {
                hummanMonts = 12 * 12;
            } else if (catType === "Siberian") {
                hummanMonts = 11 * 12;
            } else {
                isTheTipeFalse = true;
                console.log(`${catType} is invalid cat!`);
            }
            break;
        case "f":
            
            if (catType === "British Shorthair") {
                hummanMonts = 14 * 12;
            } else if (catType === "Siamese") {
                hummanMonts = 16 * 12;
            } else if (catType === "Persian") {
                hummanMonts = 15 * 12;
            } else if (catType === "Ragdoll") {
                hummanMonts = 17 * 12;
            } else if (catType === "American Shorthair") {
                hummanMonts = 13 * 12;
            } else if (catType === "Siberian") {
                hummanMonts = 12 * 12;
            } else {
                isTheTipeFalse = true;
                console.log(`${catType} is invalid cat!`);
            }
            break;
    }
    let catMonts = hummanMonts / 6;
    if (!isTheTipeFalse) {
        console.log(`${Math.floor(catMonts)} cat months`);
    }
    
}
solve(["Siberian",
"m"])


;