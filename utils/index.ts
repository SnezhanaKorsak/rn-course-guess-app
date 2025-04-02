export const getRandomNumberBetween = (min: number, max: number, exclude: number): number => {
  if (max - min <= 1) {
    return min === exclude ? max : min;
  }

  let rndNum;

  do {
    rndNum = Math.floor(Math.random() * (max - min)) + min;
  } while (rndNum === exclude); // Повторяем генерацию, если случайное число совпадает с загаданным

  return rndNum;
};