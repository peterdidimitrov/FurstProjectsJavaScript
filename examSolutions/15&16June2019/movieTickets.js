function movieTickets(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let simb1 = a1; simb1 < + a2; simb1++) {
        for (let simb2 = 1; simb2 <= (n - 1); simb2++) {
            for (let simb3 = 1; simb3 <= (n / 2 - 1); simb3++) {
                for (let simb4 = simb1; simb4 <= simb1; simb4++) {
                    if ((simb2 + simb3 + simb4) % 2 === 1 && simb1 % 2 === 1) {
                        console.log(`${String.fromCharCode(simb1)}-${simb2}${simb3}${simb4}`);
                    }

                }
            }
        }
    }

}
movieTickets(["69", "72", "4 "]);