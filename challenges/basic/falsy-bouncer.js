var should = should || require('should');
// FreeCodeCamp: Falsy Bouncer
// https://www.freecodecamp.com/challenges/falsy-bouncer

function bouncer(arr) {
  return arr.filter(function(el) {
    return el;
  });
}

// Tests
bouncer([7, "ate", "", false, 9]).should.eql([7, "ate", 9]);
bouncer(["a", "b", "c"]).should.eql(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]).should.eql([]);
bouncer([1, null, NaN, 2, undefined]).should.eql([1, 2]);
