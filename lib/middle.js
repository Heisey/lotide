
const middleIndex = arr => {
  return Math.floor(arr.length / 2);
};

const oddArr = arr => {
  return arr[middleIndex(arr)];
};

const evenArr = arr => {
  return arr.slice(middleIndex(arr) - 1, middleIndex(arr) + 1);
};

const middle = arr => {
  if (arr.length === 1 || arr.length === 2 || arr.length === 0) {
    return [];
  } else if (arr.length % 2 !== 0) {
    return [oddArr(arr)];
  }

  return evenArr(arr);
};

module.exports = middle;