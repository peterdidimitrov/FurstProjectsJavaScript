function readText(input) {
    let index = 0;

    while (true) {
        let str = input[index];
        index++;
        if (str === "Stop") {
            break;
        }
        console.log(str);
    }

}
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);