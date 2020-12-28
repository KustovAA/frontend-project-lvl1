import randomNumber from '../randomNumber.js';
import { DEFAULT_ROUND_COUNT } from '../run.js';

const isPrime = (val) => {
  if (val < 2) {
    return false;
  }

  if (val % 2 === 0) {
    return val === 2;
  }

  let i = 3;

  while (i <= Math.sqrt(val)) {
    if (val % i === 0) {
      return false;
    }

    i += 2;
  }

  return true;
};

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < DEFAULT_ROUND_COUNT; i += 1) {
    const question = randomNumber();
    const answer = isPrime(question) ? 'yes' : 'no';

    rounds.push({ question, answer });
  }

  return rounds;
};

const getGameData = () => ({
  rounds: generateRounds(),
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
});

export default getGameData;
