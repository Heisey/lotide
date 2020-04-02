const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {

  // ?? Break objects up into arrays
  const obj1Array = Object.entries(obj1).sort();
  const obj2Array = Object.entries(obj2).sort();

  // !! Check to see if they are the same lengths
  if (obj1Array.length !== obj2Array.length) {
    return false;
  }

  // ?? set count
  let count = 0;

  // !! Check to see if arrays are the same
  while (count < obj1Array.length) {

    // !! Check for nested arrays
    if (Array.isArray(obj1Array[count][1]) && Array.isArray(obj1Array[count][1])) {

      // !! Test nested arrays
      if (!eqArrays(obj1Array[count][1], obj2Array[count][1])) {
        return false;
      }
    } else {
      if (!eqArrays(obj1Array[count], obj2Array[count])) {
        return false;
      }
    }

    // ?? increase count
    count++;
  }

  // ?? If all tests pass return true
  return true;
};

module.exports = eqObjects;


// const obj1 = {a: '1', b: '2'}
// const obj2 = {a: '1', b: '2'}

// console.log(eqObjects(obj1, obj2))


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false