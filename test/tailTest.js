const { assert } = require('chai');
const assertEqual = require('../assertEqual')
const assertArraysEqual = require('../assertArraysEqual')
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"] ', () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
})
  it('returns 3 for words.length, confirming that the original "words" array was not modified', () => {
    assert.strictEqual(words.length, 3);
});
});
