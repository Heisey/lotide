const assertEqual = (actual, expected) => {

  if (actual === expected) {
    return console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😫😫😫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual