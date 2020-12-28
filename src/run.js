import readlineSync from 'readline-sync';

export const DEFAULT_ROUND_COUNT = 3;

const run = (getGameData) => {
  const { rules, rounds } = getGameData();
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  console.log(rules);

  const didWin = rounds.every((round) => {
    const { question, answer } = round;

    console.log('Question:', question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }

    console.log('Correct!');

    return true;
  });

  if (didWin) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;
