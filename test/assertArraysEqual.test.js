// ?? File modules
const assertArraysEqual = require('../lib/assertArrayEqual');

// ?? Vendor Modules
const chai = require('chai')

const assert = chai.assert;

describe('Assert Arrays Equal Test', function() {

  it('should return true if both arrays are equal', () => {
    const input1 = [1, 2, 3]
    const input2 = [1, 2, 3]

    assert.isTrue(assertArraysEqual(input1, input2));
  })
})