function getRandomInt(min, max) {
  const minD = Math.ceil(min);
  const maxD = Math.floor(max);
  return Math.floor(Math.random() * (maxD - minD)) + minD;
}

export default getRandomInt;
