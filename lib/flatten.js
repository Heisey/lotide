const assertArrayEqual = require('./assertArrayEqual');
const eqArrays = require('./eqArrays');

const flatten = arr => {

  let returnArr = [];

  arr.forEach(arg => {
    if (Array.isArray(arg)) {
      returnArr = returnArr.concat(arg);
    } else {
      returnArr.push(arg);
    }
  });

  return returnArr;
};

module.exports = flatten;