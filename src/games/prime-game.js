import { engine, randomNum } from "../index.js";

export const primeGame = () => {
    const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const test = () => {
        const randomNumber = randomNum();
        const ask = `${randomNumber}`;
        let isPrime = true;
        for (let i = 2; i < randomNumber; i++) {
            if (randomNumber % i == 0) {
                isPrime = false;
                break;
            }
        }
        isPrime === true ? isPrime = "yes" : isPrime = "no";
        const correct = isPrime;
        return [correct, ask];
    }
    engine(rule, test);
};