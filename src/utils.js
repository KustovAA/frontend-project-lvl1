export const isEven = (val) => val % 2 === 0;
export const randomNumber = (min = 1, max = 100) => Math.max(min, Math.trunc(Math.random() * max));
export const isPrime = (val) => {
  if (val < 2) {
    return false;
  }

  if (val % 2 === 0) {
    return val === 2;
  }

  let i = 3;

  while (i <= Math.sqrt(val)) {
    if (val % i === 0) {
      return false;
    }

    i += 2;
  }

  return true;
};
