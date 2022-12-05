import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  let prime = true;
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      prime = false;
      break;
    }
  }
  return prime === true ? prime = 'yes' : prime = 'no';
};

const verify = () => {
  const randomNumber = randomNum();
  const mainQuestion = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber);
  return [correctAnswer, mainQuestion];
};

export default () => {
  engine(mainRule, verify);
};
