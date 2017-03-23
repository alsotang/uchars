require('string.prototype.codepointat');

function getChars(string) {
  var arr = [];

  for (var i = 0; i < string.length; ) {
    var charCode = string.codePointAt(i);

    if (charCode <= 0xffff) {
      arr.push(string[i])
      i++
    } else {
      arr.push(string.slice(i, i+2));
      i += 2
    }
  }

  return arr;
}

module.exports = exports = getChars
