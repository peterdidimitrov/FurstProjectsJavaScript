function pcStore(input) {
    
    let prcesorPrice = Number(input[0]);
    let videoCartPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramNum = Number(input[3]);
    let persent = Number(input[4]);

    let totalProcesor = (prcesorPrice * 1.57) - ((prcesorPrice * 1.57) * persent);
    let totalVideo = (videoCartPrice * 1.57) - ((videoCartPrice * 1.57) * persent); 
    let totalRam = (ramPrice *  1.57) * ramNum;
    let totalAfterDiscont = totalProcesor + totalVideo + totalRam;

    
    console.log(`Money needed - ${totalAfterDiscont.toFixed(2)} leva.`);
}
pcStore(["500", "200", "80", "2", "0.05"]) ;