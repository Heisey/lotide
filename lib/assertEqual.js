const assertEqual = (actual, expected) => {
  
  // ~~ Check to see if inputs equal
  if (actual !== expected) {
    return false;
  }

  // ?? If all tests pass return true
  return true
  
};

module.exports = assertEqual;