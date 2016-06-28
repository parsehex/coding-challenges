var should = should || require('should');
// FreeCodeCamp: Title Case a Sentence
// https://www.freecodecamp.com/challenges/title-case-a-sentence

function titleCase(str) {
  str = str.split(' ');
  str = str.map(function(val) {

    return val.substring(0, 1).toUpperCase() + val.substring(1).toLowerCase();
  });
  str = str.join(' ');
  return str;
}

// Tests
titleCase("I'm a little tea pot").should.be.a.String();
titleCase("I'm a little tea pot").should.eql("I'm A Little Tea Pot");
titleCase("sHoRt AnD sToUt").should.eql('Short And Stout');
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT").should.eql('Here Is My Handle Here Is My Spout');
