var should = should || require('should');
// FreeCodeCamp: Sum All Odd Fibonacci Numbers
// https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
  var nums = [1, 1, 2];
  for(var i = 2; nums[i] + nums[i - 1] <= num; i++) {
    nums.push(nums[i] + nums[i - 1]);
  }
  num = nums.reduce(function(a, b) {
    return b % 2 !== 0 ? a + b : a;
  });
  return num;
}

// Tests
sumFibs(1).should.be.a.Number();
sumFibs(1000).should.equal(1785);
sumFibs(4000000).should.equal(4613732);
sumFibs(4).should.equal(5);
sumFibs(75024).should.equal(60696);
sumFibs(75025).should.equal(135721);
