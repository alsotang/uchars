# uchars

## description

split string to unicode chars correctly

## install

`npm install uchars`

## usage

```js
var string = "呵呵\uD842\uDFB7哈哈";
var arr = uchars(string)

assert(arr.length == 5)
assert(arr[2] === '\uD842\uDFB7')
assert(arr[2] === '𠮷')
```

## license

MIT
