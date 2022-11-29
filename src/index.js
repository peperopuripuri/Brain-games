import readlineSync from "readline-sync";

export const randomNum = () => Math.floor(Math.random() * 100);
export const engine = (rule, test) => {
    console.log("Welcome to the Brain Games!");
    const userName = readlineSync.question("May I have your name? ");
    console.log(`Hello ${userName}!`);
    console.log(rule);
    for (let index = 0; index < 3; index++) {
        const [correct, ask] = test();
        console.log(`Question ${ask}`);
        const answer = readlineSync.question("Your answer: ");
        if (answer === correct) {
            console.log('Correct');
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer is "${correct}".`);
            console.log(`Let"s try again, ${userName}!`);
            break;    
        } 
        if (index === 2) console.log(`Congratulations, ${userName}!`);
    }
};