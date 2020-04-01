

const letterPositions = str => {
  const results = {};

  for (let letter of str) {
    if (letter !== ' ') {
      if (results[letter]) {
        
        results[letter].push(str.indexOf(letter, results[letter][results[letter].length - 1] + 1));
      } else {
        results[letter] = [str.indexOf(letter)];
      }
    }
  }

  for (let key in results) {
    if (results[key].length === 1) {
      results[key] = results[key][0];
    }
  }

  return results;
};

module.exports = letterPositions;

// imported files not used
// const assertArrayEqual = require('./assertArrayEqual');
// const eqArrays = require('./eqArrays');

// test
// console.log(letterPositions('lighthouse labs'));