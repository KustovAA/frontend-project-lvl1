#!/usr/bin/env node

import readlineSync from 'readline-sync';
import utils from '../src/utils.js';

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}`);

let answersCount = 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (answersCount < 3) {
  const num = Math.trunc(Math.random() * 100);
  console.log('Question: ', num);

  const answer = readlineSync.question('Your answer: ');

  if ((utils.isEven(num) && answer === 'yes') || (!utils.isEven(num) && answer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${utils.isEven(num) ? 'yes' : 'no'}'.`);
    break;
  }

  answersCount += 1;
}

if (answersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}
