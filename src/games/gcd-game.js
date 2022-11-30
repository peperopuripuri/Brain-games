import { engine, randomNum } from "../index.js";

export const gcdGame = () => {
    const rule = 'Find the greatest common divisor of given numbers.';
    const calculateGcd = (randomNumber, randomNumber2) => {
        randomNumber = Math.abs(randomNumber);
        randomNumber2 = Math.abs(randomNumber2);
        if (randomNumber2 > randomNumber) {
            let temp = randomNumber;
            randomNumber = randomNumber2; 
            randomNumber = temp;
        }
        let x = true;
        while (x) {
            if (randomNumber2 == 0) return randomNumber;
            randomNumber %= randomNumber2;
            if (randomNumber == 0) return randomNumber2;
            randomNumber2 %= randomNumber;
        }
    };
    const test = () => {
        let randomNumber = randomNum();
        let randomNumber2 = randomNum();
        const ask = `${randomNumber} ${randomNumber2}`;
        const correct = String(calculateGcd(randomNumber, randomNumber2));
        return [correct, ask];
    };
    engine(rule, test);
};