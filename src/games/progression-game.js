import { engine, randomNum } from "../index.js";

export const progressionGame = () => {
    const rule = 'What number is missing in the progression?';
    const test = () => {
        let randomNumber = randomNum();
        let randomNumber2 = randomNum();
        if (randomNumber === randomNumber2) randomNumber = randomNum();
        const arithmeticProgression  = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n );
        let arr = arithmeticProgression(randomNumber, randomNumber2);
        if (arr.length === 2) arr = arithmeticProgression(randomNumber, randomNumber2);
        console.log(arr);
        do {
            randomNumber = randomNum();
            randomNumber2 = randomNum();
            arr = arithmeticProgression(randomNumber, randomNumber2);
        } while (arr.length < 5);
        console.log(arr);
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        const getRandomItem = (arr) => arr.join(" ").replace(item, "..");
        getRandomItem(arr);
        const ask = `${getRandomItem(arr)}`;
        const correct = String(item);
        return [correct, ask];
    };
    engine(rule, test);
};