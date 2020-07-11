'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {getRandomInt, generateRandomDate, generateSentences, shuffle, readContent} = require(`../utils`);
const {AnnounceLength, FullTextLength, ExitCode, FILE_NAME} = require(`../../constants`);
const DEFAULT_COUNT = 1;


const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;
const FILE_SENTENCES_PATH = `./data/sentences.txt`;

const generatePublications = (count, titles, categories, sentences) => {
  return Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length)],
    announce: generateSentences(sentences, AnnounceLength.MIN, AnnounceLength.MAX),
    fullText: generateSentences(sentences, FullTextLength.MIN, FullTextLength.MAX),
    createdDate: generateRandomDate(),
    category: shuffle(categories).slice(0, getRandomInt(1, sentences.length - 1))
  }));
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const countPublications = (!isNaN(Number.parseInt(count, 10)) && count > 0 && count <= 1000) ? Number.parseInt(count, 10) : DEFAULT_COUNT;
    const content = JSON.stringify(generatePublications(countPublications, titles, categories, sentences));
    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file: ${err}`));
      process.exit(ExitCode.ERROR);
    }
  }
};
