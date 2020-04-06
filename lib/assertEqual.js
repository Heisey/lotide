const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
  
};

module.exports = assertEqual;

// if (actual === expected) {
//   return console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
// } else {
//   console.log(`😫😫😫 Assertion Failed: ${actual} !== ${expected}`);
// }