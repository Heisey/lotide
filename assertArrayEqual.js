const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  const answer = eqArrays(arr1, arr2);

  if (answer) {
    return console.log(`😎😎😎 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😫😫😫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;