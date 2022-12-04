import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'What is the result of the expression?';
const calculate = (randomNumber, randomNumber2, randomOperator) => {
  if (randomOperator === '+') { return randomNumber + randomNumber2; }
  if (randomOperator === '-') { return randomNumber - randomNumber2; }
  if (randomOperator === '*') { return randomNumber * randomNumber2; }
};

const operators = ['+', '-', '*'];

const verify = () => {
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const randomNumber = randomNum();
  const randomNumber2 = randomNum();
  const mainQuestion = `${randomNumber} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = String(calculate(randomNumber, randomNumber2, randomOperator));
  return [correctAnswer, mainQuestion];
};

export default () => {
  engine(mainRule, verify);
};
