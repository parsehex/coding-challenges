var should = should || require('should');
// FreeCodeCamp: Truncate a String
// https://www.freecodecamp.com/challenges/truncate-a-string

function truncate(str, num) {
  num = num > 3 && str.length > num ? num - 3 : num;
  return str.length > num ? str.substr(0, num) + '...' : str;
}

// Tests
truncate("A-tisket a-tasket A green and yellow basket", 11)
  .should.eql('A-tisket...');
truncate("Peter Piper picked a peck of pickled peppers", 14)
  .should.eql('Peter Piper...');
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
  .should.eql('A-tisket a-tasket A green and yellow basket');
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
  .should.eql('A-tisket a-tasket A green and yellow basket');
truncate("A-", 1)
  .should.eql('A...');
truncate("Absolutely Longer", 2)
  .should.eql('Ab...');
