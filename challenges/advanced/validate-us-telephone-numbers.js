var should = should || require('should');
// FreeCodeCamp: Validate US Telephone Numbers
// https://www.freecodecamp.com/challenges/validate-us-telephone-numbers

function telephoneCheck(str) {
  str = str.replace(' ', '');
  if(str.match(/^(1|)( )?(\(\d{3}\)|\d{3})( |-)?\d{3}( |-)?\d{4}$/) === null)
    return false;

  return true;
}

// Tests
telephoneCheck("555-555-5555").should.be.a.Boolean();
telephoneCheck("1 555-555-5555").should.be.true();
telephoneCheck("1 (555) 555-5555").should.be.true();
telephoneCheck("5555555555").should.be.true();
telephoneCheck("555-555-5555").should.be.true();
telephoneCheck("(555)555-5555").should.be.true();
telephoneCheck("1(555)555-5555").should.be.true();
telephoneCheck("555-5555").should.be.false();
telephoneCheck("5555555").should.be.false();
telephoneCheck("1 555)555-5555").should.be.false();
telephoneCheck("1 555 555 5555").should.be.true();
telephoneCheck("1 456 789 4444").should.be.true();
telephoneCheck("123**&!!asdf#").should.be.false();
telephoneCheck("55555555").should.be.false();
telephoneCheck("(6505552368)").should.be.false();
telephoneCheck("2 (757) 622-7382").should.be.false();
telephoneCheck("0 (757) 622-7382").should.be.false();
telephoneCheck("-1 (757) 622-7382").should.be.false();
telephoneCheck("2 757 622-7382").should.be.false();
telephoneCheck("10 (757) 622-7382").should.be.false();
telephoneCheck("27576227382").should.be.false();
telephoneCheck("(275)76227382").should.be.false();
telephoneCheck("2(757)6227382").should.be.false();
telephoneCheck("2(757)622-7382").should.be.false();
telephoneCheck("555)-555-5555").should.be.false();
telephoneCheck("(555-555-5555").should.be.false();
telephoneCheck("(555)5(55?)-5555").should.be.false();
