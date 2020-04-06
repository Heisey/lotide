// ?? File Modules
const middle = require('../lib/middle');

// ?? Vendor Modules
const chai = require('chai');

const assert = chai.assert

describe('Middle Tests', () => {
  
  it('return a empty array if passed 2 or less elements', () => {
    const input = [1, 2];
    const output = []

    assert.deepEqual(middle(input), output)
  })

  it('returns 1 element from the middle if a odd array', () => {
    const input = [1, 2, 3, 4, 5]
    const output = [3]

    assert.deepEqual(middle(input), output)
  })

  it('returns 2 elements from the middle of a even array', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = [3, 4];

    assert.deepEqual(middle(input), output);
  })
})