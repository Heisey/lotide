// ?? File Moudles
const assertEqual = require('../lib/assertEqual');

// ?? Node Modules
const chai = require('chai')

const assert = chai.assert

describe('assert Equal', function() {

  it('should return true if both are equal', () => {
    const input = 'Heisey';
    const output = 'Heisey';

    assert.isTrue(assertEqual(input, output))
  })
})