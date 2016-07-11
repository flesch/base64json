'use strict';

const base64json = require('./dist/index');
const assert = require('assert');

const data = { 'hello':'world' };

assert.equal(base64json.stringify(data), 'eyJoZWxsbyI6IndvcmxkIn0=');
assert.deepEqual(base64json.parse('eyJoZWxsbyI6IndvcmxkIn0='), data);

console.log('✓ All tests passed!');
