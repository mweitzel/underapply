## underapply

Apply JavaScript objects with pre-bound context

### installation

```
$ npm install underapply
```

### example usage

It works just like apply, but with context pre-bound an no context parameter

```
require('underapply').englobal()

var numbersToAdd = [2,4]

((a, b) => a + b)._apply(numbersToAdd)
// -> 6
```

### license

MIT
