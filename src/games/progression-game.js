import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'What number is missing in the progression?';

const makeProgression = (a, b) => {
  a = randomNum();
  b = randomNum();
  if (a === b) a = randomNum();
  if (a === 0 || b === 0) a = randomNum();

  return Array.from({ length: Math.ceil(b / a) }, (_, i) => (i + 1) * a);
};

const verify = () => {
  let a;
  let b;
  let progressionArr = makeProgression(a, b);
  do {
    a = randomNum();
    b = randomNum();
    progressionArr = makeProgression(a, b);
  } while (progressionArr.length < 5);

  const randomIndex = Math.floor(Math.random() * progressionArr.length);
  const item = progressionArr[randomIndex];
  const replaceItem = () => progressionArr.join(' ').replace(item, '..');

  const mainQuestion = `${replaceItem()}`;
  const correctAnswer = String(item);

  return [correctAnswer, mainQuestion];
};

export default () => {
  engine(mainRule, verify);
};
