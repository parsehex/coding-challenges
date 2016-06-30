var should = should || require('should');
// FreeCodeCamp: Sum All Primes
// https://www.freecodecamp.com/challenges/sum-all-primes

function isPrime(num) {
  if(num === 1)
    return false;

  if(num === 2)
    return true;

  for(var i = 2; i < num; i++) {
    if(num % i === 0)
      return false;
  }
  return true;
}

function sumPrimes(num) {
  var primes = [];
  for(var i = 1; i <= num; i++) {
    if(isPrime(i))
      primes.push(i);
  }
  var sum = primes.reduce(function(a, b) {
    return a + b;
  });
  return sum;
}

// Tests
sumPrimes(10).should.be.a.Number();
sumPrimes(10).should.equal(17);
sumPrimes(977).should.equal(73156);
