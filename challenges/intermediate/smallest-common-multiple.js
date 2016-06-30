var should = should || require('should');
// FreeCodeCamp: Smallest Common Multiple
// https://www.freecodecamp.com/challenges/smallest-common-multiple

function isDivisable(num, arr) {
  if(num === 0)
    return false;

  for(var i = arr[0]; i <= arr[1]; i++) {
    if(num % i !== 0)
      return false;
  }
  return true;
}
function getNextMultiple(prev, arr) {
  var prevMultiplier = prev/(arr[0] * arr[1]);
  return (prevMultiplier + 1) * (arr[0] * arr[1]);
}
function smallestCommons(arr) {
  arr.sort();
  var multiple = arr[0] * arr[1];
  while(!isDivisable(multiple, arr)) {
    multiple = getNextMultiple(multiple, arr);
  }
  return multiple;
}

// Tests
smallestCommons([1, 5]).should.be.a.Number();
smallestCommons([1, 5]).should.eql(60);
smallestCommons([5, 1]).should.eql(60);
smallestCommons([1, 13]).should.eql(360360);
