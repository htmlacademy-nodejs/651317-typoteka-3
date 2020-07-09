'use strict';

const {MonthRange} = require(`../constants`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomDate = () => {
  const date = new Date();
  const newMonth = date.getMonth() + getRandomInt(MonthRange.MIN, MonthRange.MAX);
  date.setMonth(newMonth);
  return date;
};

const generateSentences = (sentences, min, max) => {
  const count = getRandomInt(min, max);
  let result = ``;
  for (let i = 0; i < count; i++) {
    result += sentences[getRandomInt(0, sentences.length)];
  }
  return result;
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
