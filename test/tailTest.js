// ?? File Moudles
const tail = require('../lib/tail');

// ?? Node Modules
const chai = require('chai')

const assert = chai.assert

describe('Tail Test', function() {

  it('should return tail of [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4];
    const output = [2, 3, 4];

    assert.equal(tail(input), output)
  })
})