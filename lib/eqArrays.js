// ?? compares 2 arrays and returns true if both are equal
const eqArrays = (arr1, arr2) => {

  // !! Check Arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // !! Check entries of array to see if they match
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // ?? All tests pass return true
  return true;
}

// ?? File Export
module.exports = eqArrays;