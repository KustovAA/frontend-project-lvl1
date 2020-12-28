const randomNumber = (minArg = 1, maxArg = 100) => {
  const min = Math.ceil(minArg);
  const max = Math.floor(maxArg);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default randomNumber;
