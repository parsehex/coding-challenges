var should = should || require('should');
// FreeCodeCamp: Slasher Flick
// https://www.freecodecamp.com/challenges/slasher-flick

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

// Tests
slasher([1, 2, 3], 2)
  .should.eql([3]);
slasher([1, 2, 3], 0)
  .should.eql([1, 2, 3]);
slasher([1, 2, 3], 9)
  .should.eql([]);
slasher([1, 2, 3], 4)
  .should.eql([]);
slasher(["burgers", "fries", "shake"], 1)
  .should.eql(["fries", "shake"]);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)
  .should.eql(["cheese", 4]);
