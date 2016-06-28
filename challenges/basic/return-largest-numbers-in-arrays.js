var should = should || require('should');
// FreeCodeCamp: Return Largest Numbers in Arrays
// https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

function largestOfFour(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
      return b - a;
    });
  }
  return [arr[0][0], arr[1][0], arr[2][0], arr[3][0]];
}

// Tests
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
  .should.be.an.Array();
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
  .should.eql([27, 5, 39, 1001]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
  .should.eql([9, 35, 97, 1000000]);
