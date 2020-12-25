import readlineSync from 'readline-sync';
import run from '../../src/run';
import brainCalc from '../../src/games/brain-calc.js';
import brainEven from '../../src/games/brain-even.js';
import brainGCD from '../../src/games/brain-gcd.js';
import brainPrime from '../../src/games/brain-prime.js';
import brainProgression from '../../src/games/brain-progression.js';

describe('brain-games', () => {
  describe('brain-calc', () => {
    const { rounds, rules } = brainCalc;
    const userName = 'Test User';
    let i;

    beforeEach(() => {
      console.log = jest.fn();
      i = 0;
    });

    test('when win', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(4);
      expect(console.log.mock.calls).toHaveLength(9);
      expect(console.log).toHaveBeenLastCalledWith(`Congratulations, ${userName}!`);
    });

    test('when lost', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer + 1)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(2);
      expect(console.log.mock.calls).toHaveLength(5);
      expect(console.log).toHaveBeenLastCalledWith(`Let's try again, ${userName}!`);
    });
  });

  describe('brain-even', () => {
    const { rounds, rules } = brainEven;
    const userName = 'Test User';
    let i;

    beforeEach(() => {
      console.log = jest.fn();
      i = 0;
    });

    test('when win', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(4);
      expect(console.log.mock.calls).toHaveLength(9);
      expect(console.log).toHaveBeenLastCalledWith(`Congratulations, ${userName}!`);
    });

    test('when lost', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer + 1)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(2);
      expect(console.log.mock.calls).toHaveLength(5);
      expect(console.log).toHaveBeenLastCalledWith(`Let's try again, ${userName}!`);
    });
  });

  describe('brain-gcd', () => {
    const { rounds, rules } = brainGCD;
    const userName = 'Test User';
    let i;

    beforeEach(() => {
      console.log = jest.fn();
      i = 0;
    });

    test('when win', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(4);
      expect(console.log.mock.calls).toHaveLength(9);
      expect(console.log).toHaveBeenLastCalledWith(`Congratulations, ${userName}!`);
    });

    test('when lost', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer + 1)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(2);
      expect(console.log.mock.calls).toHaveLength(5);
      expect(console.log).toHaveBeenLastCalledWith(`Let's try again, ${userName}!`);
    });
  });

  describe('brain-prime', () => {
    const { rounds, rules } = brainPrime;
    const userName = 'Test User';
    let i;

    beforeEach(() => {
      console.log = jest.fn();
      i = 0;
    });

    test('when win', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(4);
      expect(console.log.mock.calls).toHaveLength(9);
      expect(console.log).toHaveBeenLastCalledWith(`Congratulations, ${userName}!`);
    });

    test('when lost', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer + 1)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(2);
      expect(console.log.mock.calls).toHaveLength(5);
      expect(console.log).toHaveBeenLastCalledWith(`Let's try again, ${userName}!`);
    });
  });

  describe('brain-progression', () => {
    const { rounds, rules } = brainProgression;
    const userName = 'Test User';
    let i;

    beforeEach(() => {
      console.log = jest.fn();
      i = 0;
    });

    test('when win', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(4);
      expect(console.log.mock.calls).toHaveLength(9);
      expect(console.log).toHaveBeenLastCalledWith(`Congratulations, ${userName}!`);
    });

    test('when lost', () => {
      const userInputs = [userName, ...rounds.map(({ answer }) => answer + 1)];
      readlineSync.question = jest.fn(() => {
        i += 1;
        return userInputs[i - 1];
      });
      run({ rounds, rules });
      expect(readlineSync.question.mock.calls).toHaveLength(2);
      expect(console.log.mock.calls).toHaveLength(5);
      expect(console.log).toHaveBeenLastCalledWith(`Let's try again, ${userName}!`);
    });
  });
});
