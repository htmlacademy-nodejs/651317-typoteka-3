'use strict';

const {Cli} = require(`./cli`);
const chalk = require(`chalk`);
const {USER_ARGV_INDEX, DEFAULT_COMMAND, ExitCode} = require(`../constants`);


const userArguments = process.argv.slice(USER_ARGV_INDEX); // USER_ARGV_INDEX
const [userCommand] = userArguments;

const runCliCommand = (command, args) => {
  try {
    Cli[command].run(args);
  } catch (err) {
    console.error(chalk.red(`Something went wrong while running CLI command, err: ${err}`));
    process.exit(ExitCode.ERROR);
  }
};

if (userArguments.length === 0 || !Cli[userCommand]) {
  runCliCommand(DEFAULT_COMMAND);
  process.exit(ExitCode.SUCCESS);
}

runCliCommand(userCommand, userArguments.slice(1));

