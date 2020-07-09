'use strict';

const USER_ARGV_INDEX = 2;
const DEFAULT_COMMAND = `--help`;

const ExitCode = {
  SUCCESS: 0,
  ERROR: 1
};

const MONTH_RANGE = 3;

const AnnounceLength = {
  MIN: 1,
  MAX: 5
};

const FullTextLength = {
  MIN: 1,
  MAX: 10
};

module.exports = {
  USER_ARGV_INDEX,
  DEFAULT_COMMAND,
  ExitCode,
  AnnounceLength,
  FullTextLength,
  MONTH_RANGE
};
