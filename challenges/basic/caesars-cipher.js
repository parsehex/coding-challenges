var should = should || require('should');
// FreeCodeCamp: Caesars cipher
// https://www.freecodecamp.com/challenges/caesars-cipher

function rot13(str) {
  str = str.split('');
  str = str.map(function(cur) {
    var code = cur.charCodeAt(0);
    if(code >= 65 && code <= 77) {
      return String.fromCharCode(code + 13);
    } else if(code >= 78 && code <= 90) {
      return String.fromCharCode(code - 13);
    }
    return cur;
  });
  str = str.join('');
  return str;
}

// Tests
rot13("SERR PBQR PNZC")
  .should.eql('FREE CODE CAMP');
rot13("SERR YBIR?")
  .should.eql('FREE LOVE?');
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")
  .should.eql('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.');
