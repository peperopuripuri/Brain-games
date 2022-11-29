import { engine, randomNum } from "../index.js";

export const evenGame = () => {
    const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
    const test = () => {
        const randomNumber = randomNum();
        const ask = randomNumber;
        let correct;
        (randomNumber % 2 === 0) ? correct = 'yes' : correct = 'no';
        return [correct, ask];
    };
    engine(rule, test);
};