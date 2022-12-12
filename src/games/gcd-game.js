import engine from '../index.js';
import generateRandomNum from '../helpers.js';

const mainRule = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (a, b) => {
  let randomNumber = a;
  let randomNumber2 = b;

  if (randomNumber < randomNumber2) {
    const temp = randomNumber;
    randomNumber = randomNumber2;
    randomNumber2 = temp;
  }

  while (randomNumber2 !== 0) {
    const temp = randomNumber2;
    randomNumber2 = randomNumber % randomNumber2;
    randomNumber = temp;
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
