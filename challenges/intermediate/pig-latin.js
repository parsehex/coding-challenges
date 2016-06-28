var should = should || require('should');
// FreeCodeCamp: Pig Latin
// https://www.freecodecamp.com/challenges/pig-latin

function translate(str) {
  var vowels = 'aeiouy';
  var consonants = 'bcdfghjklmnpqrstvwxz';
  if(vowels.indexOf(str.substr(0, 1)) > -1)
    return str + 'way';

  var first = '';
  var end = '';
  var i = 0;
  while(consonants.indexOf(str.substr(i, 1)) > -1) {
    first += str.substr(i, 1);
    i++;
  }
  end = str.substring(i, str.length);
  return end + first + 'ay';
}

// Tests
translate("california").should.eql("aliforniacay");
translate("paragraphs").should.eql("aragraphspay");
translate("glove").should.eql("oveglay");
translate("algorithm").should.eql("algorithmway");
translate("eight").should.eql("eightway");
