import randomNumber from '../randomNumber.js';
import { DEFAULT_ROUND_COUNT } from '../run.js';

const generateProgression = (start, step, length) => {
  const result = [];

  for (let i = start; i < length + start; i += 1) {
    result.push(start + (i - start) * step);
  }

  return result;
};

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < DEFAULT_ROUND_COUNT; i += 1) {
    const start = randomNumber();
    const step = randomNumber(1, 8);
    const length = randomNumber(5, 12);
    const progression = generateProgression(start, step, length);
    const hiddenPos = randomNumber(0, length - 1);
    const answer = String(progression[hiddenPos]);
    progression[hiddenPos] = '..';
    const question = progression.join(' ');

    rounds.push({ question, answer });
  }

  return rounds;
};

const getGameData = () => ({
  rounds: generateRounds(),
  rules: 'What number is missing in the progression',
});

export default getGameData;
