var should = should || require('should');
// FreeCodeCamp: Spinal Tap Case
// https://www.freecodecamp.com/challenges/spinal-tap-case

function spinalCase(str) {
  var newStr = [];
  for(var i = 0; i < str.length; i++) {
    if(i === 0) {
      // first character
      newStr.push(str[i].toLowerCase());
      continue;
    }
    var code = str.charCodeAt(i);
    if(code >= 65 && code <= 90) {
      // charcter is uppercase (charcodes 65-90 are uppercase)
      if(newStr[newStr.length - 1].match(/ |-|_/) === null) {
        newStr.push('-');
      }
      newStr.push(str[i].toLowerCase());
      continue;
    }
    if(code >= 97 && code <= 122) {
      // character is lowercase (charcodes (97-122 are lowercase))
      newStr.push(str[i]);
      continue;
    }
    if(str[i].match(/ |-|_/) !== null) {
      // character is a space, hyphen, or underscore
      newStr.push('-');
      continue;
    }
  }

  return newStr.join('');
}

// Tests
spinalCase('This Is Spinal Tap').should.eql('this-is-spinal-tap');
spinalCase('thisIsSpinalTap').should.eql('this-is-spinal-tap');
spinalCase('The_Andy_Griffith_Show').should.eql('the-andy-griffith-show');
spinalCase('Teletubbies say Eh-oh').should.eql('teletubbies-say-eh-oh');
spinalCase('AllThe-small Things').should.eql('all-the-small-things');
