var should = should || require('should');
// FreeCodeCamp: Pairwise
// https://www.freecodecamp.com/challenges/pairwise

function pairwise(arr, arg) {
	if(arr.length === 0) {
		return 0;
	}
  var indices = [];
  var i, j;
  for(i = 0; i < arr.length; i++) {
  	for(j = i + 1; j < arr.length; j++) {
  		if(indices.indexOf(i) === -1 && indices.indexOf(j) === -1 && arr[i] + arr[j] === arg) {
  			if(indices.indexOf(i) === -1) {
  				indices.push(i);
  			}
  			if(indices.indexOf(j) === -1) {
  				indices.push(j);
  			}
  		}
  	}
  }
  var sum = indices.reduce(function(a,b) {return a + b;});
  return sum;
}

// Tests
pairwise([1, 4, 2, 3, 0, 5], 7).should.equal(11);
pairwise([1, 3, 2, 4], 4).should.equal(1);
pairwise([1, 1, 1], 2).should.equal(1);
pairwise([0, 0, 0, 0, 1, 1], 1).should.equal(10);
pairwise([], 100).should.equal(0);
