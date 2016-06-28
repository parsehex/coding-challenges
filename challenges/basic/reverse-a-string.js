var should = should || require('should');
// FreeCodeCamp: Reverse a String
// https://www.freecodecamp.com/challenges/reverse-a-string

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Tests
reverseString("hello").should.be.a.String();
reverseString("hello").should.eql('olleh');
reverseString("Howdy").should.eql('ydwoH');
reverseString("Greetings from Earth").should.eql('htraE morf sgniteerG');
