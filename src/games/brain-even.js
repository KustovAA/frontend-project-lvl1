import { randomNumber, isEven } from '../utils.js';

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const question = randomNumber();
    const answer = isEven(question) ? 'yes' : 'no';

    rounds.push({ question, answer });
  }

  return rounds;
};

const game = {
  rounds: generateRounds(),
  printRules: () => console.log('Answer "yes" if the number is even, otherwise answer "no".'),
};

export default game;
