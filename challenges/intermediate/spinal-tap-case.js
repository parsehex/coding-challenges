var should = should || require('should');
// FreeCodeCamp: Spinal Tap Case
// https://www.freecodecamp.com/challenges/spinal-tap-case

function spinalCase(str) {
  if(str.match(/ |_/) === null) {
    var newStr = '';
    for(var i = 0; i < str.length; i++) {
      if(str[i] !== str[i].toUpperCase()) {
        newStr += str[i];
      } else {
        newStr += ' ' + str[i];
      }
    }
    str = newStr;
  }
  str = str.toLowerCase();
  str = str.replace(/ |_/g, '-');
  return  str;
}

// Tests
spinalCase('This Is Spinal Tap').should.eql('this-is-spinal-tap');
spinalCase('thisIsSpinalTap').should.eql('this-is-spinal-tap');
spinalCase('The_Andy_Griffith_Show').should.eql('the-andy-griffith-show');
spinalCase('Teletubbies say Eh-oh').should.eql('teletubbies-say-eh-oh');
spinalCase('AllThe-small Things').should.eql('all-the-small-things');
