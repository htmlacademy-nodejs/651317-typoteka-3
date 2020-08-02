'use strict';

const USER_ARGV_INDEX = 2;
const DEFAULT_COMMAND = `--help`;
const DEFAULT_PORT = 3000;
const EXPRESS_DEFAULT_PORT = 8080;
const FILE_NAME = `mocks.json`;
const PUBLIC_DIR = `public`;

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

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  USER_ARGV_INDEX,
  DEFAULT_COMMAND,
  ExitCode,
  AnnounceLength,
  FullTextLength,
  MONTH_RANGE,
  DEFAULT_PORT,
  EXPRESS_DEFAULT_PORT,
  HttpCode,
  FILE_NAME,
  PUBLIC_DIR
};
