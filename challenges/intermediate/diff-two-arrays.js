var should = should || require('should');
// FreeCodeCamp: Diff Two Arrays
// https://www.freecodecamp.com/challenges/diff-two-arrays

function diff(arr1, arr2) {
  var newArr = [];
  for(var i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) > -1) {
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    } else {
      newArr.push(arr1[i]);
    }
  }
  newArr = newArr.concat(arr2);
  return newArr;
}

// Tests
diff([1, 2, 3, 5], [1, 2, 3, 4, 5])
  .should.be.an.Array();
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  .should.eql(["pink wool"]);
diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  .should.eql(["pink wool", "diorite"]);
diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])
  .should.eql([]);
diff([1, 2, 3, 5], [1, 2, 3, 4, 5])
  .should.eql([4]);
diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
  .should.eql(["piglet", 4]);
diff([], ["snuffleupagus", "cookie monster", "elmo"])
  .should.eql(["snuffleupagus", "cookie monster", "elmo"]);
diff([1, "calf", 3, "piglet"], [7, "filly"])
  .should.eql([1, "calf", 3, "piglet", 7, "filly"]);
