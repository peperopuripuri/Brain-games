#!/usr/bin/env node
import readlineSync from "readline-sync";

const wholeGameLogic = () => {
    const userName = readlineSync.question("May I have your name? ");
    console.log("Hello " + userName + "!");
    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
    for (let index = 0; index < 3; index++) {
        const randomNum = Math.floor(Math.random() * 100);
        const askRandomNum = () => console.log(`Question: ${randomNum}`);
        askRandomNum();
        const correctAnswer = () => {
            if (randomNum % 2 === 0) {
                return "yes";
            } else if (randomNum % 2 !== 0) {
                return "no";
            }
        };
        const answer = readlineSync.question("Your answer: ");
        if (answer !== correctAnswer()) {
            console.log(`"${answer}" is wrong answer ;(. Correct answer is "${correctAnswer()}".`);
            console.log(`Let"s try again, ${userName}!`);
            break;
        } else if (answer === correctAnswer()) {
            console.log("Correct!");
        }
        if (index === 2) console.log(`Congratulations, ${userName}!`);
    }
};
wholeGameLogic();