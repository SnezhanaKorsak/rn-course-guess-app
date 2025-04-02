export const getRandomNumberBetween = (min: number, max: number, exclude: number): number => {
  const rndNum =  Math.floor(Math.random() * (max - min)) + min;

  if(rndNum === exclude) {
    return getRandomNumberBetween(min, max, exclude);
  }

  return rndNum;
}