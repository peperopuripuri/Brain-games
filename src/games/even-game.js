import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNumber) => randomNumber % 2 === 0;

const verify = () => {
  const randomNumber = randomNum();
  const mainQuestion = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) === true ? 'yes' : 'no';
  return [correctAnswer, mainQuestion];
};

export default () => {
  engine(mainRule, verify);
};
