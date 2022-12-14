import engine from '../index.js';
import generateRandomNum from '../helpers.js';

const mainRule = 'What number is missing in the progression?';

const makeProgression = (numb, length, count) => {
  let n = numb;
  const result = [];
  for (let i = 1; length - i; i += 1) {
    n += count;
    result.push(n);
  }
  return result;
};

const generateGameVariables = () => {
  const n = generateRandomNum(1, 100);
  const length = generateRandomNum(10, 20);
  const count = generateRandomNum(10, 20);

  const progression = makeProgression(n, length, count);
  const randomIndex = generateRandomNum(1, progression.length);
  const userAnswer = progression[randomIndex];
  const hidenUserAnswer = progression.join(' ').replace(userAnswer, '..');

  const mainQuestion = `${hidenUserAnswer}`;
  const correctAnswer = String(userAnswer);
  return [correctAnswer, mainQuestion];
};

export default () => engine(mainRule, generateGameVariables);
