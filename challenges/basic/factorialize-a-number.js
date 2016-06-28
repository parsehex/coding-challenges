var should = should || require('should');
// FreeCodeCamp: Factorialize a Number
// https://www.freecodecamp.com/challenges/factorialize-a-number

function factorialize(num) {
  var nums = [];
  for(var i = 1; i <= num; i++) {
    nums.push(i);
  }
  return nums.reduce(function(p, c) {
    return p * c;
  }, 1);
}

// Tests
factorialize(5).should.be.a.Number();
factorialize(5).should.equal(120);
factorialize(10).should.equal(3628800);
factorialize(20).should.equal(2432902008176640000);
factorialize(0).should.equal(1);
