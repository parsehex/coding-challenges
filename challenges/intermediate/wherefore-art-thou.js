var should = should || require('should');
// FreeCodeCamp: Wherefore Art Thou
// https://www.freecodecamp.com/challenges/wherefore-art-thou

function where(collection, source) {
  var arr = [];
  collection.forEach(function(cur) {
    var i = 0;
    for(var prop in source) {
      if(cur.hasOwnProperty(prop) && cur[prop] === source[prop]) {
        i++;
      } else {
        break;
      }
    }
    if(i >= Object.keys(source).length) {
      arr.push(cur);
    }
  });
  return arr;
}

// Tests
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
  .should.eql([{ first: "Tybalt", last: "Capulet" }]);
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
  .should.eql([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]);
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
  .should.eql([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })
  .should.eql([{ "a": 1, "b": 2, "c": 2 }]);
