import engine from '../index.js';
import generateRandomNum from '../helpers.js';

const mainRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  let prime = true;
  if (randomNumber < 2) prime = false;

  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
};

const generateGameVariables = () => {
  const randomNumber = generateRandomNum(-100, 100);
  const mainQuestion = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, mainQuestion];
};

export default () => engine(mainRule, generateGameVariables);
