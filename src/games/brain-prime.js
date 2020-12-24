import { randomNumber, isPrime } from '../utils.js';

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const question = randomNumber();
    const answer = isPrime(question) ? 'yes' : 'no';

    rounds.push({ question, answer });
  }

  return rounds;
};

const game = {
  rounds: generateRounds(),
  printRules: () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".'),
};

export default game;
