var should = should || require('should');
// FreeCodeCamp: Where do I Belong
// https://www.freecodecamp.com/challenges/where-do-i-belong

function where(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

// Tests
where([10, 20, 30, 40, 50], 35).should.equal(3);
where([10, 20, 30, 40, 50], 30).should.equal(2);
where([40, 60], 50).should.equal(1);
where([3, 10, 5], 3).should.equal(0);
where([5, 3, 20, 3], 5).should.equal(2);
where([2, 20, 10], 19).should.equal(2);
where([2, 5, 10], 15).should.equal(3);
