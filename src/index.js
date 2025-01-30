function checkNumber(secret, guess) {
    if (guess < secret) return "Больше";
    if (guess > secret) return "Меньше";
    return "Угадал!";
}

function getMiddle(min, max) {
    return Math.floor((min + max) / 2);
}

function playGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let min = 1, max = 100, guess, result;

    console.log(`Компьютер 1: Я загадал число!`);
    console.log("");
	

    while (true) {
        guess = getMiddle(min, max);
        console.log(`Компьютер 2: Пробую число ${guess}`);
        result = checkNumber(secretNumber, guess);
        console.log(`Компьютер 1: ${result}`);
        console.log("");

        if (result === "Угадал!") break;
        if (result === "Больше") min = guess + 1;
        if (result === "Меньше") max = guess - 1;
    }
}

playGame();