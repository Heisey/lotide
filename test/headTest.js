// ?? File Moudles
const head = require('../lib/head');

// ?? Node Modules
const chai = require('chai')

const assert = chai.assert

describe('Head Test', function() {

  it('should return first element of array', () => {
    const input = [1, 2, 3, 4];
    const output = 1;

    assert.equal(head(input), output)
  })
})