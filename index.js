'use strict';

import { Buffer } from 'buffer/';
import JSON3 from 'json3';

// base64json.stringify({ 'hello':'world' });
export const stringify = (obj, replacer = null, spaces = 0) => {
  return Buffer.from(JSON3.stringify(obj, replacer, spaces), 'ascii').toString('base64');
}

// base64json.parse('eyJoZWxsbyI6IndvcmxkIn0=');
export const parse = (text, reviver = null) => {
  return JSON3.parse(Buffer.from(text, 'base64').toString(), reviver);
}
