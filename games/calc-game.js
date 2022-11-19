import readlineSync from "readline-sync";

export const startGame = () => {
    const userName = readlineSync.question("May I have your name? ");
    console.log("Hello " + userName + "!");
    console.log("What is the result of the expression?");
    for (let index = 0; index < 1; index++) {
        const randomNum = Math.floor(Math.random() * 100);
        const randomNum2 = Math.floor(Math.random() * 50);
        const randomNum3 = Math.floor(Math.random() * 200);
        const randomNum4 = Math.floor(Math.random() * 60);
        const randomNum5 = Math.floor(Math.random() * 20);
        const randomNum6 = Math.floor(Math.random() * 30000);
        const sum = `${randomNum + randomNum2}`
        const mnoj = `${randomNum3 * randomNum4}`
        const raznica = `${randomNum5 - randomNum6}`  
        const askRandomSum = () => console.log(`Question: ${randomNum} + ${randomNum2}`);
        const askRandomMnoj = () => console.log(`Question: ${randomNum3} * ${randomNum4}`);
        const askRandomRaznica = () => console.log(`Question: ${randomNum5} - ${randomNum6}`);
        askRandomSum();
        const answer = readlineSync.question("Your answer: ");
        if (answer === sum) {
            console.log('Correct!');
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer is "${sum}".`);
            console.log(`Let"s try again, ${userName}!`);
            break;
        }
        askRandomMnoj()
        const answer2 = readlineSync.question("Your answer: ");
        if (answer2 === mnoj) {
            console.log('Correct!');
        } else {
            console.log(`"${answer2}" is wrong answer ;(. Correct answer is "${mnoj}".`);
            console.log(`Let"s try again, ${userName}!`);
            break;
        }
        askRandomRaznica()
        const answer3 = readlineSync.question("Your answer: ");
        if (answer3 === raznica) {
            console.log('Correct!');
        } else {
            console.log(`"${answer3}" is wrong answer ;(. Correct answer is "${raznica}".`);
            console.log(`Let"s try again, ${userName}!`);
            break;
        }
        if (index === 0) console.log(`Congratulations, ${userName}!`);
    }   
}