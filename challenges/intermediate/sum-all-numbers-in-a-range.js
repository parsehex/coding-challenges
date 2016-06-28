var should = should || require('should');
// FreeCodeCamp: Sum All Numbers in a Range
// https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
  arr.sort(function(a,b){return a - b;});
  var curr = 0;
  for(var i = arr[0]; i <= arr[1]; i++) {
    curr += i;
  }
  return curr;
}

// Tests
sumAll([1, 4]).should.be.a.Number();
sumAll([1, 4]).should.equal(10);
sumAll([4, 1]).should.equal(10);
sumAll([5, 10]).should.equal(45);
sumAll([10, 5]).should.equal(45);
