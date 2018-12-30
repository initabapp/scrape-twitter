'use strict';

var parseUsername = function parseUsername(username) {
  return (username || '').replace('@', '');
};

var handleError = function handleError(exit) {
  return function (err) {
    if (err != null) {
      if (err.statusCode === 429) {
        console.error(err.message);
      } else if (err.statusCode !== 404) {
        console.error(err.message);
        console.error(err.stack);
      }
      return exit(1);
    }
  };
};

module.exports = {
  parseUsername: parseUsername,
  handleError: handleError
};