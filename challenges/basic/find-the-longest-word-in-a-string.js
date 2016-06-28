var should = should || require('should');
// FreeCodeCamp: Find the Longest Word in a String
// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
  str = str.split(/[^\w]/);
  str = str.map(function(val) {
    return val.length;
  });
  str.sort(function(a, b) {
    return b - a;
  });
  return str[0];
}

// Tests
findLongestWord("The quick brown fox jumped over the lazy dog")
  .should.be.a.Number();
findLongestWord("The quick brown fox jumped over the lazy dog")
  .should.equal(6);
findLongestWord("May the force be with you")
  .should.equal(5);
findLongestWord("Google do a barrel roll")
  .should.equal(6);
findLongestWord("What if we try a super-long word such as otorhinolaryngology")
  .should.equal(19);
