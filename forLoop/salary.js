function salary(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let sal = Number(input[index]);
    index++;


    for (i = 0; i < n; i++) {
        let Site = input[index];
        index++;
        if (Site === "Facebook") {
            sal -= 150;
        } else if (Site === "Instagram") {
            sal -= 100;
        } else if (Site === "Reddit") {
            sal -= 50;
        }

    }

    if (sal <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(sal);
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);