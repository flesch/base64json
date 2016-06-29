# base64json

Stringify and parse `JSON` data with **Base64**.

`base64json.stringify()` and `base64json.parse()` work as you'd expect the native JSON methods to, however the input or output will be Base64.

Use with caution — this doesn't validate `JSON`, so when using `base64json.parse()` you have to know that the encoded string is actually `JSON`.

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
```

### parse

```javascript
let decoded = base64json.parse('eyJoZWxsbyI6IndvcmxkIn0=');
```

---

This module only exists because I didn't want to keep doing this:

```javascript
let encoded = Buffer.from(JSON.stringify({ 'hello':'world' }), 'ascii').toString('base64');
let decoded = JSON.parse(Buffer.from('eyJoZWxsbyI6IndvcmxkIn0=', 'base64').toString('ascii'));
```

