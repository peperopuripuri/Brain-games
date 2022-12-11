import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'What number is missing in the progression?';

const makeProgression = (numb) => {
  let n = numb;
  const result = [];
  const length = randomNum(10, 20);
  for (let i = 1; length - i; i += 1) {
    n += length;
    result.push(n);
  }
  return result;
};

const generateGameVariables = () => {
  const n = randomNum(1, 100);
  const progressionArr = makeProgression(n);
  const randomIndex = Math.floor(Math.random() * progressionArr.length);
  const userAnswer = progressionArr[randomIndex];
  const hideUserAnswer = () => progressionArr.join(' ').replace(userAnswer, '..');

  const mainQuestion = `${hideUserAnswer()}`;
  const correctAnswer = String(userAnswer);
  return [correctAnswer, mainQuestion];
};

export default () => {
  engine(mainRule, generateGameVariables);
};
