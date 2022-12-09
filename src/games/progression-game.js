import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'What number is missing in the progression?';

const makeProgression = (num1) => {
  let a = num1;
  const result = [];
  const length = 6;
  for (let i = 1; i < length; i += 1) {
    a += a;
    result.push(a);
  }

  return result.sort((c, d) => c - d);
};

const generateGameVariables = () => {
  const a = randomNum();
  const progressionArr = makeProgression(a);
  
  const randomIndex = Math.floor(Math.random() * progressionArr.length);
  const item = progressionArr[randomIndex];
  const userAnswer = () => progressionArr.join(' ').replace(item, '..');

  const mainQuestion = `${userAnswer()}`;
  const correctAnswer = String(item);
  return [correctAnswer, mainQuestion];
};

export default () => {
  engine(mainRule, generateGameVariables);
};
