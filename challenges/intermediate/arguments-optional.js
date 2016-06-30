var should = should || require('should');
// FreeCodeCamp: Arguments Optional
// https://www.freecodecamp.com/challenges/arguments-optional

function add() {
  if(typeof arguments[0] !== 'number' || (arguments.length > 1 && typeof arguments[1] !== 'number'))
    return undefined;

  if(arguments.length === 1){
    var arg = arguments[0];
    return function(num) {
      return typeof arguments[0] === 'number' ? arg + num : undefined;
    };
  }

  return arguments[0] + arguments[1];
}

// Tests
add(2, 3).should.equal(5);
add(2)(3).should.equal(5);
should(add("http://bit.ly/IqT6zt")).be.Undefined();
should(add(2, "3")).be.Undefined();
should(add(2)([3])).be.Undefined();
