# pull-append

append a value to the end of a pull stream.

## example

``` js
var Append = require('pull-append')
var pull = require('pull-stream')

pull(
  pull.values([1,2,3]),
  Append(function () {
    return 40
  }),
  pull.collect(function (err, ary) {
    console.log(ary) // => [1, 2, 3, 40]
  })
)
```

## Append(last) => Through

return a through stream that passes through it's input unchanged
except that the return value of `last()` is appended.

if the source ends in an error, the error is passed immediately, without adding `last()`


## License

MIT
