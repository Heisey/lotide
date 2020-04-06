// ?? Return first element in array
const head = arr => {

  // ~~ Check to see if any elements in array and is array
  if (arr.length === 0 || !Array.isArray(arr)) {
    return undefined
  }

  // ?? if tests pass return first element
  return arr[0];
};

module.exports = head;