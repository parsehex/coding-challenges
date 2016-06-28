var should = should || require('should');
// FreeCodeCamp: Counting Cards
// https://www.freecodecamp.com/challenges/counting-cards

var count = 0;

function cc(card) {
  var c = card;
  if(c === 2 || c === 3 || c === 4 || c === 5 || c === 6) {
    count++;
  } else if(c === 10 || c === 'J' || c === 'Q' || c === 'K' || c === 'A') {
    count--;
  }
  return count > 0 ? count + ' Bet' : count + ' Hold';
}

// Tests
cc(2); cc(3); cc(4); cc(5);
cc(6).should.eql('5 Bet');
count = 0; // Reset count

cc(7); cc(8);
cc(9).should.eql('0 Hold');
count = 0;

cc(10); cc('J'); cc('Q'); cc('K');
cc('A').should.eql('-5 Hold');
count = 0;

cc(3); cc(7); cc('Q'); cc(8);
cc('A').should.eql('-1 Hold');
count = 0;

cc(2); cc('J'); cc(9); cc(2);
cc(7).should.eql('1 Bet');
count = 0;

cc(2); cc(2);
cc(10).should.eql('1 Bet');
count = 0;

cc(3); cc(2); cc('A'); cc(10);
cc('K').should.eql('-1 Hold');
count = 0;
