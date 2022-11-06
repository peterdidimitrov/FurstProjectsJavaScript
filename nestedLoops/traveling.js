function traveling(input) {
    let destination = "";
    while (destination != "End") {
        destination = input.shift();
        let priceDestination = Number(input.shift());
        let saving = 0;
        for (let savingTot = 0; savingTot < priceDestination;) {
            saving = Number(input.shift());
            savingTot += saving
            if (savingTot >= priceDestination) {
                console.log(`Going to ${destination}!`)
            }
        }
    }
}
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", 
"Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);