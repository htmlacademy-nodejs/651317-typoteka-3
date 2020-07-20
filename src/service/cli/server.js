'use strict';

const http = require(`http`);
const chalk = require(`chalk`);
const fs = require(`fs`).promises;
const {DEFAULT_PORT, FILE_NAME, ExitCode, HttpCode} = require(`../../constants`);

const sendResponse = (res, statusCode, message) => {
  const template = `
    <!Doctype html>
      <html lang="ru">
        <head>
          <title>With love from Node</title>
        </head>
        <body>
          ${message}
        </body>
      </html>`.trim();
  res.statusCode = statusCode;
  res.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`
  });
  res.end(template);
};

const onClientConnect = async (req, res) => {
  const notFoundMessageText = `Not Found`;

  switch (req.url) {
    case `/`:
      try {
        const fileContent = await fs.readFile(FILE_NAME);
        const mocks = JSON.parse(fileContent);
        const message = mocks.map((post) => `<li>${post.title}</li>`).join(``);
        sendResponse(res, HttpCode.OK, `<ul>${message}</ul>`);
      } catch (err) {
        console.log(err);
        sendResponse(res, HttpCode.NOT_FOUND, notFoundMessageText);
      }
      break;
    default:
      sendResponse(res, HttpCode.NOT_FOUND, notFoundMessageText);
      break;
  }
};

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    http.createServer(onClientConnect).listen(port).on(`listening`, (err) => {
      if (err) {
        throw new Error(`Error while creating server, err: ${err}`);
      }
      return console.info(chalk.green(`Waiting for connection on port: ${port}`));
    });

  }
};
