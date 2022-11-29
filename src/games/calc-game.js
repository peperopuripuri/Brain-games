import { engine, randomNum } from "../index.js";

export const calcGame = () => {
    const rule = 'What is the result of the expression?';
    const generateRandomMathSymbol = () => {
        let result = '';
        const symbols = '+-*';
        for (let i = 0; i < 1; i++) {
            result += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
        return result;
    };
    const calculate = (randomNumber, randomNumber2, randomMathSymbol) => {
        if (randomMathSymbol === '+') {return randomNumber + randomNumber2;}
        if (randomMathSymbol === '-') {return randomNumber - randomNumber2;}
        if (randomMathSymbol === '*') {return randomNumber * randomNumber2;}
    };
    const test = () => {
        let randomNumber = randomNum();
        let randomNumber2 = randomNum();
        let randomMathSymbol = generateRandomMathSymbol();    
        const ask = `${randomNumber} ${randomMathSymbol} ${randomNumber2}`;
        const correct = String(calculate(randomNumber, randomNumber2, randomMathSymbol));
        return [correct, ask];
    };
    engine(rule, test);
};