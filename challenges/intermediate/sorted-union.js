var should = should || require('should');
// FreeCodeCamp: Sorted Union
// https://www.freecodecamp.com/challenges/sorted-union

function unite(arr1, arr2, arr3) {
  var args = Array.prototype.slice.call(arguments, 0);
  var concatedArr = [];
  args.forEach(function(cur) {
    concatedArr = concatedArr.concat(cur);
  });
  var arr = [];
  concatedArr.forEach(function(cur) {
    if(arr.indexOf(cur) === -1)
      arr.push(cur);
  });
  return arr;
}

// Tests
unite([1, 3, 2], [5, 2, 1, 4], [2, 1])
  .should.eql([1, 3, 2, 5, 4]);
unite([1, 3, 2], [1, [5]], [2, [4]])
  .should.eql([1, 3, 2, [5], [4]]);
unite([1, 2, 3], [5, 2, 1])
  .should.eql([1, 2, 3, 5]);
unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
  .should.eql([1, 2, 3, 5, 4, 6, 7, 8]);
