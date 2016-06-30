var should = should || require('should');
// FreeCodeCamp: Everything Be True
// https://www.freecodecamp.com/challenges/everything-be-true

function every(collection, pre) {
  for(var i = 0; i < collection.length; i++) {
    if(!collection[i].hasOwnProperty(pre) || !collection[i][pre])
      return false;
  }
  return true;
}

// Tests
every([{"user": "Tinky-Winky", "sex": "male"},
  {"user": "Dipsy", "sex": "male"},
  {"user": "Laa-Laa", "sex": "female"},
  {"user": "Po", "sex": "female"}],
  "sex")
  .should.be.true();
every([{"user": "Tinky-Winky", "sex": "male"},
  {"user": "Dipsy"},
  {"user": "Laa-Laa", "sex": "female"},
  {"user": "Po", "sex": "female"}],
  "sex")
  .should.be.false();
every([{"user": "Tinky-Winky", "sex": "male", "age": 0},
  {"user": "Dipsy", "sex": "male", "age": 3},
  {"user": "Laa-Laa", "sex": "female", "age": 5},
  {"user": "Po", "sex": "female", "age": 4}],
  "age")
  .should.be.false();
every([{"name": "Pete", "onBoat": true},
  {"name": "Repeat", "onBoat": true},
  {"name": "FastFoward", "onBoat": null}],
  "onBoat")
  .should.be.false();
every([{"name": "Pete", "onBoat": true},
  {"name": "Repeat", "onBoat": true, "alias": "Repete"},
  {"name": "FastFoward", "onBoat": true}],
  "onBoat")
  .should.be.true();
every([{"single": "yes"}],
  "single")
  .should.be.true();
every([{"single": ""},
  {"single": "double"}],
  "single")
  .should.be.false();
every([{"single": "double"},
  {"single": undefined}],
  "single")
  .should.be.false();
every([{"single": "double"},
  {"single": NaN}],
  "single")
  .should.be.false();
