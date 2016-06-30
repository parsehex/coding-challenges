var should = should || require('should');
// FreeCodeCamp: Steamroller
// https://www.freecodecamp.com/challenges/steamroller

function steamroller(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArr = newArr.concat(steamroller(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Tests
steamroller([[["a"]], [["b"]]]).should.eql(["a", "b"]);
steamroller([1, [2], [3, [[4]]]]).should.eql([1, 2, 3, 4]);
steamroller([1, [], [3, [[4]]]]).should.eql([1, 3, 4]);
steamroller([1, {}, [3, [[4]]]]).should.eql([1, {}, 3, 4]);
