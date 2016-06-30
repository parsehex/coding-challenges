var should = should || require('should');
// FreeCodeCamp: Drop It
// https://www.freecodecamp.com/challenges/drop-it

function drop(arr, func) {
  for(var i = 0, len = arr.length + 1; i < len; i++) {
    if(func(arr[0]) || arr.length === 0)
      return arr;

    arr.shift();
  }
}

// Tests
drop([1, 2, 3, 4], function(n) {return n >= 3;})
  .should.eql([3, 4]);
drop([0, 1, 0, 1], function(n) {return n === 1;})
  .should.eql([1, 0, 1]);
drop([1, 2, 3], function(n) {return n > 0;})
  .should.eql([1, 2, 3]);
drop([1, 2, 3, 4], function(n) {return n > 5;})
  .should.eql([]);
drop([1, 2, 3, 7, 4], function(n) {return n > 3;})
  .should.eql([7, 4]);
drop([1, 2, 3, 9, 2], function(n) {return n > 2;})
  .should.eql([3, 9, 2]);
