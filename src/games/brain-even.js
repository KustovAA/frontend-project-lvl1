import randomNumber from '../randomNumber.js';
import { DEFAULT_ROUND_COUNT } from '../run.js';

const isEven = (val) => val % 2 === 0;

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < DEFAULT_ROUND_COUNT; i += 1) {
    const question = randomNumber();
    const answer = isEven(question) ? 'yes' : 'no';

    rounds.push({ question, answer });
  }

  return rounds;
};

const getGameData = () => ({
  rounds: generateRounds(),
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
});

export default getGameData;
