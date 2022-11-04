# uchars

## description

split javascript string to unicode chars correctly

## install

`npm install uchars`

## usage

```js
var string = "呵呵😄\uD842\uDFB7哈哈";
// arr would be [ '呵', '呵', '😄', '𠮷', '哈', '哈' ]
var arr = uchars(string)

assert(string.length === 8)
assert(arr.length === 6)
assert(arr[2] === '😄')
assert(arr[2].length === 2)
assert(arr[3] === '\uD842\uDFB7')
assert(arr[3] === '𠮷')
```

## license

MIT
