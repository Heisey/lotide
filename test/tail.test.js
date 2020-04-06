// ?? File Moudles
const tail = require('../lib/tail');

// ?? Node Modules
const chai = require('chai')

const assert = chai.assert

describe('Tail Test', function() {

  it('should return tail of [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4];
    const output = [2, 3, 4];

    assert.deepEqual(tail(input), output);
  })

  it('should return undefined if passed only 1 element', () => {
    const input = [1];
    const output = undefined;

    assert.equal(tail(input), output);
  })

  it('should return undefined if passed not a array', () => {
    const input = 'not an array';
    const output = undefined;

    assert.equal(tail(input), output);
  })
});