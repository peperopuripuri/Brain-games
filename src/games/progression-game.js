import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'What number is missing in the progression?';

const makeProgression = (randomNumber, randomNumber2) => {
  const doMath = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);
  if (randomNumber === randomNumber2) randomNumber = randomNum();
  if (randomNumber === 0 || randomNumber2 === 0) randomNumber = randomNum();
  let arr = '';
  do {
    randomNumber = randomNum();
    randomNumber2 = randomNum();
    arr = doMath(randomNumber, randomNumber2);
    if (arr.length > 200 || arr.length < 0) arr = doMath(randomNumber, randomNumber2);
  } while (arr.length < 5);
  return arr;
};

const verify = () => {
  const progressionArr = makeProgression();
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
