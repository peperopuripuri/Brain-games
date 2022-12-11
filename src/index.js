import readlineSync from 'readline-sync';

const engine = (mainRule, generateGameVariables) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(mainRule);
  const countRounds = 3;
  for (let index = 0; index < countRounds; index += 1) {
    const [correctAnswer, mainQuestion] = generateGameVariables();
    console.log(`Question: ${mainQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
