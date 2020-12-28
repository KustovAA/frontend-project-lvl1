import randomNumber from '../randomNumber.js';
import { DEFAULT_ROUND_COUNT } from '../run.js';

const findGCD = (first, second) => {
  let a = first;
  let b = second;
  let t;
  while (a !== 0 && b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }

  return Math.max(a, b);
};

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < DEFAULT_ROUND_COUNT; i += 1) {
    const operand1 = randomNumber();
    const operand2 = randomNumber();
    const question = `${operand1} ${operand2}`;
    const answer = String(findGCD(operand1, operand2));

    rounds.push({ question, answer });
  }

  return rounds;
};

const getGameData = () => ({
  rounds: generateRounds(),
  rules: 'Find the greatest common divisor of given numbers.',
});

export default getGameData;
