const findKeyByValue = (obj, key) => {

  for (let objKey in obj) {
    if (obj[objKey] === key) {
      return objKey
    }
  }

  return undefined
}

// ?? file import
// const assertEqual = require('./assertEqual')

// ?? tests
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);