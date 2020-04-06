// ?? File Modules
const eqArrays = require('../lib/eqArrays')

// ?? Vendor Modules
const chai = require('chai');

const assert = chai.assert;

describe('Equal Arrays', function() {

  it('Returns true if both arrays are equal', () => {
    const input1 = [1, 2, 3, 4];
    const input2 = [1, 2, 3, 4];

    assert.isTrue(eqArrays(input1, input2));
  })

  it('Return false if arrays are not equal', () => {
    const input1 = [1, 2, 3, 4];
    const input2 = [2, 3, 4, 5];

    assert.isFalse(eqArrays(input1, input2))
  })

  it('Returns false if arrays are not the same length', () => {
    const input1 = [1, 2, 3];
    const input2 = [1, 2];

    assert.isFalse(eqArrays(input1, input2))
  })
})