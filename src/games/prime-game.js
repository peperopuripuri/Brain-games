import readlineSync from "readline-sync";

export const start = () => {
    const userName = readlineSync.question("May I have your name? ");
    console.log("Hello " + userName + "!");
    console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
    for (let index = 0; index < 3; index++) {
        let randomNum = Math.floor(Math.random() * 100);
        console.log(`Question: ${randomNum}`);
        let isPrime = true;
        for (let i = 2; i < randomNum; i++) {
            if (randomNum % i == 0) {
                isPrime = false;
                break;
            }
        }
        isPrime === true ? isPrime = "yes" : isPrime = "no";
        const answer = readlineSync.question("Your answer: ");
        if (answer === isPrime) {
            console.log("Correct!");
        } else if (answer !== isPrime){
            console.log(`"${answer}" is wrong answer ;(. Correct answer is "${isPrime}".`);
            console.log(`Let"s try again, ${userName}!`);
            break;
        }
        if (index === 2) console.log(`Congratulations, ${userName}!`);
    }
};