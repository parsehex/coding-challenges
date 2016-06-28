var should = should || require('should');
// FreeCodeCamp: Missing Letters
// https://www.freecodecamp.com/challenges/missing-letters

function fearNotLetter(str) {
  str = str.split('');
  str = str.map(function(cur) {
    return cur.charCodeAt(0);
  });
  for(var i = str[0]; i < str[str.length - 1]; i++) {
    if(str.indexOf(i) === -1)
      return String.fromCharCode(i);
  }
  return undefined;
}

// Tests
fearNotLetter("abce").should.eql('d');
fearNotLetter("abcdefghjklmno").should.eql('i');
should(fearNotLetter("bcd")).be.Undefined();
should(fearNotLetter("yz")).be.Undefined();
