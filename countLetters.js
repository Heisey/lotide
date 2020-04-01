
// included assertEqual but never used it
// const assertEqual = require('./assertEqual');

const countLetters = str => {
  // return Obj
  const result = {};

  // take all the spaces out of the string
  str = str.split(' ').join('');

  for (let letter of str) {

    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  
  return result;
};

module.exports = countLetters;

// tests
// console.log(countLetters('lightHouse labs'))