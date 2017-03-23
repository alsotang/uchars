var uchars = require('..')
var assert = require('assert')

describe('test/uchars.test.js', function () {
  it('should split unicode string correctly', function () {
    var string = "呵呵\uD842\uDFB7哈哈";
    var arr = uchars(string)

    assert(arr.length == 5)
    assert(arr[2] === '\uD842\uDFB7')
    assert(arr[2] === '𠮷')
  })
})
