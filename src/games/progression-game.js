import readlineSync from "readline-sync";

export const gameStart = () => {
    const userName = readlineSync.question("May I have your name? ");
    console.log("Hello " + userName + "!");
    console.log("What number is missing in the progression?");
    for (let index = 0; index < 3; index++) {
        let randomNum = Math.floor(Math.random() * 9);
        let randomNum2 = Math.floor(Math.random() * 50);
        if (randomNum === randomNum2) randomNum = Math.floor(Math.random() * 10);
        const arithmeticProgression  = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n );
        let arr = arithmeticProgression(randomNum, randomNum2);
        if (arr.length < 5) arr = arithmeticProgression(Math.floor(Math.random() * 10), Math.floor(Math.random() * 100));
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        const getRandomItem = (arr) => arr.join(" ").replace(item, "..");
        getRandomItem(arr);
        console.log(`Question: ${getRandomItem(arr)}`);
        const answer = readlineSync.question("Your answer: ");
        if (answer == item) {
            console.log("Correct!");
        } else if (answer !== getRandomItem(arr)) {
            console.log(`"${answer}" is wrong answer ;(. Correct answer is "${item}".`);
            console.log(`Let"s try again, ${userName}!`);
            break;
        }
        if (index === 2) console.log(`Congratulations, ${userName}!`);
    }
};