import { randomNumber } from '../utils.js';

const findGCD = (...args) => {
  let [a, b] = args;
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

  for (let i = 0; i < 3; i += 1) {
    const operand1 = randomNumber();
    const operand2 = randomNumber();
    const question = `${operand1} ${operand2}`;
    const answer = String(findGCD(operand1, operand2));

    rounds.push({ question, answer });
  }

  return rounds;
};

const game = {
  rounds: generateRounds(),
  printRules: () => console.log('Find the greatest common divisor of given numbers.'),
};

export default game;
