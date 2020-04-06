// ?? File Module
const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {

  // ~~ Test if arrays are equal
  if (!eqArrays(arr1, arr2)) {
    return false;
  }

  // ?? If pass all tests return true
  return true;
};

module.exports = assertArraysEqual;