var should = should || require('should');
// FreeCodeCamp: Mutations
// https://www.freecodecamp.com/challenges/mutations

function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  for(var i = 0; i < arr[1].length; i++) {
    if(arr[0].indexOf(arr[1][i]) === -1) {
      return false;
    }
  }
  return true;
}

// Tests
mutation(["hello", "hey"]).should.be.false();
mutation(["hello", "Hello"]).should.be.true();
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]).should.be.true();
mutation(["Mary", "Army"]).should.be.true();
mutation(["Mary", "Aarmy"]).should.be.true();
mutation(["Alien", "line"]).should.be.true();
mutation(["floor", "for"]).should.be.true();
mutation(["hello", "neo"]).should.be.false();
mutation(["voodoo", "no"]).should.be.false();
