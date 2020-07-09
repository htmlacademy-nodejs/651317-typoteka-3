'use strict';

const {MONTH_RANGE} = require(`../constants`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomDate = () => {
  const firstDate = new Date();
  const secondDate = new Date();
  secondDate.setMonth(secondDate.getMonth() - MONTH_RANGE);
  const randomDate = getRandomInt(+firstDate, +secondDate);
  return new Date(randomDate);

};

const generateSentences = (sentences, min, max) => {
  const count = getRandomInt(min, max);
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(sentences[getRandomInt(0, sentences.length)]);
  }
  return result.join(``);
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

module.exports = {
  getRandomInt,
  generateRandomDate,
  generateSentences,
  shuffle
};
