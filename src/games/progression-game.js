import { engine, randomNum } from '../index.js';

const progressionGame = () => {
  const rule = 'What number is missing in the progression?';
  const test = () => {
    let randomNumber = randomNum();
    let randomNumber2 = randomNum();
    if (randomNumber === randomNumber2) randomNumber = randomNum();
    if (randomNumber === 0 || randomNumber2 === 0) randomNumber = randomNum();
    const arithmeticProgression = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);
    let arr = '';
    do {
      randomNumber = randomNum();
      randomNumber2 = randomNum();
      arr = arithmeticProgression(randomNumber, randomNumber2);
      if (arr.length > 200 || arr.length < 0) {
        arr = arithmeticProgression(randomNumber, randomNumber2);
      }
    } while (arr.length < 5);
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    const getRandomItem = (arr) => arr.join(' ').replace(item, '..');
    const ask = `${getRandomItem(arr)}`;
    const correct = String(item);
    return [correct, ask];
  };
  engine(rule, test);
};
export default progressionGame;
