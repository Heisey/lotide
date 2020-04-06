const eqObjects = require('./eqObjects')

const assertObjectsEqual = (arr1, arr2) => {
  const answer = eqObjects(arr1, arr2);

  if (answer) {
    return console.log(`😎😎😎 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😫😫😫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertObjectsEqual;

// ?? Tests
// const cd = { c: "1", d: ["2"] };
// const dc = { d: ["2", 3], c: "1" };

// assertObjectsEqual(cd, dc)