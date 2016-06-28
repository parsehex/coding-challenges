var should = should || require('should');
// FreeCodeCamp: Repeat a String
// https://www.freecodecamp.com/challenges/repeat-a-string

function repeat(str, num) {
  var newString = "";
  for(var i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}

// Tests
repeat("*", 3).should.eql('***');
repeat("abc", 3).should.eql('abcabcabc');
repeat("abc", 4).should.eql('abcabcabcabc');
repeat("abc", 1).should.eql('abc');
repeat("*", 8).should.eql('********');
repeat("abc", -1).should.eql('');
