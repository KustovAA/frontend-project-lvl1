import randomNumber from '../randomNumber.js';
import { DEFAULT_ROUND_COUNT } from '../run.js';

const methodsMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const calculator = (method) => {
  if (!methodsMap[method]) {
    throw new Error(`There is no method called ${method} in calculator`);
  }

  return methodsMap[method];
};

const generateRounds = () => {
  const methods = Object.keys(methodsMap);
  const rounds = [];

  for (let i = 0; i < DEFAULT_ROUND_COUNT; i += 1) {
    const method = methods[randomNumber(0, methods.length - 1)];
    const operand1 = randomNumber();
    const operand2 = randomNumber();
    const question = `${operand1} ${method} ${operand2}`;
    const answer = String(calculator(method)(operand1, operand2));

    rounds.push({ question, answer });
  }

  return rounds;
};

const getGameData = () => ({
  rounds: generateRounds(),
  rules: 'What is the result of the expression?',
});

export default getGameData;
