import readlineSync from 'readline-sync';
import utils from './utils.js';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  return name;
};

const playEven = () => {
  const name = askName();
  let answersCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (answersCount < 3) {
    const num = Math.trunc(Math.random() * 100);
    console.log('Question: ', num);

    const answer = readlineSync.question('Your answer: ');

    if ((utils.isEven(num) && answer === 'yes') || (!utils.isEven(num) && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.`);
      return;
    }

    answersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

const cli = {
  askName,
  playEven,
};

export default cli;
