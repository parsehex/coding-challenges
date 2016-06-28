var should = should || require('should');
// FreeCodeCamp: Search and Replace
// https://www.freecodecamp.com/challenges/search-and-replace

function myReplace(str, before, after) {
  if(str.toLowerCase().indexOf(before.toLowerCase()) === -1)
    return false;

  if(before.substr(0, 1) === before.substr(0, 1).toUpperCase())
    after = after.substr(0, 1).toUpperCase() + after.substring(1, after.length);

  str = str.replace(before, after);
  return str;
}

// Tests
myReplace("Let us go to the store", "store", "mall")
  .should.eql("Let us go to the mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  .should.eql("He is Sitting on the couch");
myReplace("This has a spellngi error", "spellngi", "spelling")
  .should.eql("This has a spelling error");
myReplace("His name is Tom", "Tom", "john")
  .should.eql("His name is John");
myReplace("Let us get back to more Coding", "Coding", "algorithms")
  .should.eql("Let us get back to more Algorithms");
