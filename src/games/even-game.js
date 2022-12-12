import engine from '../index.js';
import generateRandomNum from '../helpers.js';

const mainRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNumber) => randomNumber % 2 === 0;

const generateGameVariables = () => {
  const randomNumber = generateRandomNum(1, 100);
  const mainQuestion = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, mainQuestion];
};

export default () => engine(mainRule, generateGameVariables);
