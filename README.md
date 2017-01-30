[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![npm-issues][npm-issues-image]][npm-issues-url]
[![js-standard-style][standard-image]][standard-url]
[![GitHub license][license-image]][license-url]

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[npm-image]: https://img.shields.io/npm/v/json-keep.svg?style=flat
[npm-url]: https://npmjs.org/package/json-keep
[downloads-image]: https://img.shields.io/npm/dt/json-keep.svg?style=flat
[downloads-url]: https://npmjs.org/package/json-keep
[npm-issues-image]: https://img.shields.io/github/issues/allupinit/json-keep.svg
[npm-issues-url]: https://github.com/allupinit/json-keep/issues
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/allupinit/json-keep/master/LICENSE

# json-keep
Returns an object with only the specified keys.  
This is synchronous code, so callbacks are not not used.

Useful when you want to keep/pass only specific parts of a JSON object.  
Pass the object as the first argument, and an array as the second.

If a value in the array matches a key in the object, it is returned.

### Usage
```js
var jsonKeep = require('json-keep');
obj = { 1:1, 2:2, 3:3, 4:4 }
console.log('keeping:',jsonKeep(obj,[1,5,4]));
```

### Returns
```js
keeping:  { '1': 1, '4': 4 }
```
