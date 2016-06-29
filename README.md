# base64json

Stringify and parse `JSON` data as **Base64**.

`base64json.stringify()` and `base64json.parse()` work as you'd expect the native `JSON` methods to, however the input or output will be Base64.

Use with caution — this doesn't validate `JSON`, so when using `base64json.parse()` you have to know that the encoded string is actually `JSON`.

Under the hood, **base64json** uses [buffer](https://www.npmjs.com/package/buffer) and [JSON3](https://www.npmjs.com/package/json3) (see [Changes from JSON2](https://www.npmjs.com/package/json3#changes-from-json-2) and [Date Serialization](https://www.npmjs.com/package/json3#date-serialization)).

## Installation

```bash
$ npm install --save base64json
```

```javascript
const base64json = require('base64json');
```

## Usage

See `test.js` and run `npm test` to try the following examples.

### stringify

```javascript
let encoded = base64json.stringify({ 'hello':'world' }, null, 2);
// → "ewogICJoZWxsbyI6ICJ3b3JsZCIKfQ=="
```

### parse

```javascript
let decoded = base64json.parse('ewogICJoZWxsbyI6ICJ3b3JsZCIKfQ==');
// → { "hello":"world" }
// → decoded.hello === 'world'
```

## Motivation

It could be argued this module doesn't need to exist, and I'd probably agree with you — Base64 isn't the most efficient way to store `JSON`.

While working with `JSON` files pulled from the Repository [Contents](https://developer.github.com/v3/repos/contents/#get-contents) endpoint of the GitHub API, I needed a quicker way of stringifying and parsing that `content` response. This module only exists because I didn't want to keep doing this:

```javascript
let encoded = Buffer.from(JSON.stringify({ 'hello':'world' }), 'ascii').toString('base64');
let decoded = JSON.parse(Buffer.from('eyJoZWxsbyI6IndvcmxkIn0=', 'base64').toString('ascii'));
```

## License

(The MIT License)

Copyright (c) 2016 [John Flesch](http://fles.ch).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
