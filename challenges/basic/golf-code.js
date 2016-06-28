var should = should || require('should');
// FreeCodeCamp: Golf code
// https://www.freecodecamp.com/challenges/golf-code

function golfScore(par, strokes) {
  if(strokes == 1) {
    return "Hole-in-one!";
  } else if(strokes <= (par - 2)) {
    return "Eagle";
  } else if(strokes == (par - 1)) {
    return "Birdie";
  } else if(strokes == par) {
    return "Par";
  } else if(strokes == (par + 1)) {
    return "Bogey";
  } else if(strokes == (par + 2)) {
    return "Double Bogey";
  } else if(strokes >= (par + 3)) {
    return "Go Home!";
  }
}

// Tests
golfScore(4, 1).should.eql('Hole-in-one!');
golfScore(4, 2).should.eql('Eagle');
golfScore(5, 2).should.eql('Eagle');
golfScore(4, 3).should.eql('Birdie');
golfScore(4, 4).should.eql('Par');
golfScore(1, 1).should.eql('Hole-in-one!');
golfScore(5, 5).should.eql('Par');
golfScore(4, 5).should.eql('Bogey');
golfScore(4, 6).should.eql('Double Bogey');
golfScore(4, 7).should.eql('Go Home!');
golfScore(5, 9).should.eql('Go Home!');
