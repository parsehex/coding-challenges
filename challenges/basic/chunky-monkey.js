var should = should || require('should');
// FreeCodeCamp: Chunky Monkey
// https://www.freecodecamp.com/challenges/chunky-monkey

function chunk(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

// Tests
chunk(["a", "b", "c", "d"], 2)
  .should.eql([["a", "b"], ["c", "d"]]);
chunk([0, 1, 2, 3, 4, 5], 3)
  .should.eql([[0, 1, 2], [3, 4, 5]]);
chunk([0, 1, 2, 3, 4, 5], 2)
  .should.eql([[0, 1], [2, 3], [4, 5]]);
chunk([0, 1, 2, 3, 4, 5], 4)
  .should.eql([[0, 1, 2, 3], [4, 5]]);
chunk([0, 1, 2, 3, 4, 5, 6], 3)
  .should.eql([[0, 1, 2], [3, 4, 5], [6]]);
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
  .should.eql([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
  .should.eql([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
