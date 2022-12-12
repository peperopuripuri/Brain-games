import engine from '../index.js';
import generateRandomNum from '../helpers.js';

const mainRule = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (a, b) => {
  let randomNumber = a;
  let randomNumber2 = b;
  randomNumber = Math.abs(randomNumber);
  randomNumber2 = Math.abs(randomNumber2);
  if (randomNumber2 > randomNumber) {
    const temp = randomNumber;
    randomNumber = randomNumber2;
    randomNumber = temp;
  }
  const x = true;
  while (x) {
    if (randomNumber2 === 0) return randomNumber;
    randomNumber %= randomNumber2;
    if (randomNumber === 0) return randomNumber2;
    randomNumber2 %= randomNumber;
  }
  return randomNumber;
};

const generateGameVariables = () => {
  const randomNumber = generateRandomNum(1, 100);
  const randomNumber2 = generateRandomNum(1, 100);
  const mainQuestion = `${randomNumber} ${randomNumber2}`;
  const correctAnswer = String(calculateGcd(randomNumber, randomNumber2));
  return [correctAnswer, mainQuestion];
};

export default () => engine(mainRule, generateGameVariables);
