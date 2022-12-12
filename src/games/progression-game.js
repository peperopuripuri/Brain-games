import engine from '../index.js';
import generateRandomNum from '../helpers.js';

const mainRule = 'What number is missing in the progression?';

const makeProgression = (numb, length) => {
  let n = numb;
  const result = [];
  for (let i = 1; length - i; i += 1) {
    n += length;
    result.push(n);
  }
  return result;
};

const generateGameVariables = () => {
  const n = generateRandomNum(1, 100);
  const length = generateRandomNum(10, 20);

  const progressionArr = makeProgression(n, length);
  const randomIndex = generateRandomNum(1, progressionArr.length);
  const userAnswer = progressionArr[randomIndex];
  const hidenUserAnswer = progressionArr.join(' ').replace(userAnswer, '..');

  const mainQuestion = `${hidenUserAnswer}`;
  const correctAnswer = String(userAnswer);
  return [correctAnswer, mainQuestion];
};

export default () => engine(mainRule, generateGameVariables);
