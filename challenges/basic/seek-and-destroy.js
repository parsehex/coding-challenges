var should = should || require('should');
// FreeCodeCamp: Seek and Destroy
// https://www.freecodecamp.com/challenges/seek-and-destroy

function destroyer(arr) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  return arr.filter(function(el) {
    return args.indexOf(el) === -1;
  });
}

// Tests
destroyer([1, 2, 3, 1, 2, 3], 2, 3)
  .should.eql([1, 1]);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
  .should.eql([1, 5, 1]);
destroyer([3, 5, 1, 2, 2], 2, 3, 5)
  .should.eql([1]);
destroyer([2, 3, 2, 3], 2, 3)
  .should.eql([]);
destroyer(["tree", "hamburger", 53], "tree", 53)
  .should.eql(["hamburger"]);
