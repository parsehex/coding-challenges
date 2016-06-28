var should = should || require('should');
// FreeCodeCamp: Boo Who
// https://www.freecodecamp.com/challenges/boo-who

function boo(bool) {
  return bool === true || bool === false;
}

// Tests
boo(true).should.be.true();
boo(false).should.be.true();
boo([1, 2, 3]).should.be.false();
boo([].slice()).should.be.false();
boo({ "a": 1 }).should.be.false();
boo(1).should.be.false();
boo(NaN).should.be.false();
boo("a").should.be.false();
boo("true").should.be.false();
boo("false").should.be.false();
