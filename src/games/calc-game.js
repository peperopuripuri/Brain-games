import { engine, randomNum } from '../index.js';

const calcGame = () => {
  const rule = 'What is the result of the expression?';
  const generateRandomMathSymbol = () => {
    let result = '';
    const symbols = '+-*';
    for (let i = 0; i < 1; i + 1) {
      result += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return result;
  };
  const calculate = (randomNumber, randomNumber2, randomMathSymbol) => {
    if (randomMathSymbol === '+') { return randomNumber + randomNumber2; }
    if (randomMathSymbol === '-') { return randomNumber - randomNumber2; }
    if (randomMathSymbol === '*') { return randomNumber * randomNumber2; }
  };
  const test = () => {
    const randomNumber = randomNum();
    const randomNumber2 = randomNum();
    const randomMathSymbol = generateRandomMathSymbol();
    const ask = `${randomNumber} ${randomMathSymbol} ${randomNumber2}`;
    const correct = String(calculate(randomNumber, randomNumber2, randomMathSymbol));
    return [correct, ask];
  };
  engine(rule, test);
};
export default calcGame;
