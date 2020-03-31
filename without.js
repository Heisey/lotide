const without = (arr1, arr2) => {

  const result = [];

  arr1.forEach(arg1 => {
    if (!arr2.find(arg2 => arg1 === arg2)) {
      result.push(arg1);
    }
  });

  return result;
};

module.exports = without;