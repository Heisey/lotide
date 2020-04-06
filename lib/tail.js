// ?? Returns all elements except the first
const tail = arr => {

  // ~~ Test for 2 or more elements and if arr is array
  if (arr.length < 2 || !Array.isArray(arr)) {
    return undefined
  }

  // ?? If tests pass return array from index 1
  return arr.slice(1);
};

module.exports = tail
