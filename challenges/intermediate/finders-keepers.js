var should = should || require('should');
// FreeCodeCamp: Finders Keepers
// https://www.freecodecamp.com/challenges/finders-keepers

function find(arr, func) {
  for(var i = 0; i < arr.length; i++) {
    if(func(arr[i]))
      return arr[i];
  }
}

// Tests
find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
  .should.equal(8);
should(find([1, 3, 5, 9], function(num) { return num % 2 === 0; }))
  .be.Undefined();
