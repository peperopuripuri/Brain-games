import readlineSync from "readline-sync";

export const theGame = () => {
    const userName = readlineSync.question("May I have your name? ");
    console.log("Hello " + userName + "!");
    console.log("Find the greatest common divisor of given numbers.");
    for (let index = 0; index < 3; index++) {
        let randomNum = Math.floor(Math.random() * 100);
        let randomNum2 = Math.floor(Math.random() * 100);
        const gsdRec = () => {
            randomNum = Math.abs(randomNum);
            randomNum2 = Math.abs(randomNum2);
            if (randomNum2 > randomNum) {
                let temp = randomNum;
                randomNum = randomNum2; 
                randomNum = temp;
            }
            while (true) {
                if (randomNum2 == 0) return randomNum;
                randomNum %= randomNum2;
                if (randomNum == 0) return randomNum2;
                randomNum2 %= randomNum;
            }
        };
        const askGds = () => console.log(`Question: ${randomNum} ${randomNum2}`);
        askGds();
        const answer = readlineSync.question("Your answer: ");
        if (answer == gsdRec()) {
            console.log("Correct!");
        } else if (answer !== gsdRec()) {
            console.log(`"${answer}" is wrong answer ;(. Correct answer is "${gsdRec()}".`);
            console.log(`Let"s try again, ${userName}!`);
            break;
        }
        if (index === 2) console.log(`Congratulations, ${userName}!`);
    }
};