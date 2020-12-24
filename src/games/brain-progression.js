import { randomNumber } from '../utils.js';

const generateProgression = (step, length) => {
  const result = [];
  const start = randomNumber();

  for (let i = start; i < length + start; i += 1) {
    result.push(i * step);
  }

  return result;
};

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const step = randomNumber(1, 8);
    const length = randomNumber(5, 12);
    const progression = generateProgression(step, length);
    const hiddenPos = randomNumber(0, length - 1);
    const answer = String(progression[hiddenPos]);
    progression[hiddenPos] = '..';
    const question = progression.join(' ');

    rounds.push({ question, answer });
  }

  return rounds;
};

const game = {
  rounds: generateRounds(),
  printRules: () => console.log('What number is missing in the progression'),
};

export default game;
