import readlineSync from 'readline-sync';
import cli from './cli.js';

const run = (game) => {
  const name = cli();

  game.printRules();

  const didWin = game.rounds.every((round) => {
    const { question, answer } = round;

    console.log('Question: ', question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return false;
    }

    return true;
  });

  if (didWin) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;