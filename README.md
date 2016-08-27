# json-keep
Returns an object with only the specified keys.  
This is synchronous code, so callbacks are not not used.

Useful when you want to keep/pass only specific parts of a JSON object.  
Pass the object as the first argument, and an array as the second arg.

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