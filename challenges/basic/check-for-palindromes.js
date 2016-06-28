var should = should || require('should');
// FreeCodeCamp: Check for Palindromes
// https://www.freecodecamp.com/challenges/check-for-palindromes

function palindrome(str) {
  str = str.toLowerCase().match(/[a-z0-9]/g).join('');
  var reverse = str.split('').reverse().join('');
  return str === reverse;
}

// Tests
palindrome("eye").should.be.a.Boolean();
palindrome("eye").should.be.true();
palindrome("_eye").should.be.true();
palindrome("race car").should.be.true();
palindrome("not a palindrome").should.be.false();
palindrome("A man, a plan, a canal. Panama").should.be.true();
palindrome("never odd or even").should.be.true();
palindrome("nope").should.be.false();
palindrome("almostomla").should.be.false();
palindrome("My age is 0, 0 si ega ym.").should.be.true();
palindrome("1 eye for of 1 eye.").should.be.false();
palindrome("0_0 (: /-\ :) 0-0").should.be.true();
palindrome("five|\_/|four").should.be.false();
