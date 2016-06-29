'use strict';

const base64json = require('./dist/index');
const assert = require('assert');

const data = { 'hello':'world' };

assert.equal(base64json.stringify(data), 'ewogICJoZWxsbyI6ICJ3b3JsZCIKfQ==');
assert.deepEqual(base64json.parse('ewogICJoZWxsbyI6ICJ3b3JsZCIKfQ=='), data);

console.log('✓ All tests passed!');
