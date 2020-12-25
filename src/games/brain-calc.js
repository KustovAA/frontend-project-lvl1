import { randomNumber } from '../utils.js';

const calculator = (method) => {
  const methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return methods[method] ?? (() => 'no answer');
};

const generateRounds = () => {
  const ops = ['+', '-', '*'];
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const method = ops[randomNumber(0, 2)];
    const operand1 = randomNumber();
    const operand2 = randomNumber();
    const question = `${operand1} ${method} ${operand2}`;
    const answer = String(calculator(method)(operand1, operand2));

    rounds.push({ question, answer });
  }

  return rounds;
};

const game = {
  rounds: generateRounds(),
  rules: 'What is the result of the expression?',
};

export default game;
