import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'What number is missing in the progression?';

const makeProgression = (numb) => {
  let n = numb;
  const result = [];
  const length = 6;
  const interval = Math.floor(Math.random() * 30);
  for (let i = 1; i < length; i += 1) {
    n += interval;
    result.push(n);
  }

  return result.sort((c, d) => c - d);
};

const generateGameVariables = () => {
  const n = randomNum();
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
