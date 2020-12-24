export const isEven = (val) => val % 2 === 0;
export const randomNumber = (min = 1, max = 100) => Math.max(min, Math.trunc(Math.random() * max));
