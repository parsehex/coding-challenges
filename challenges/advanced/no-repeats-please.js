var should = should || require('should');
// FreeCodeCamp: No Repeats Place
// https://www.freecodecamp.com/challenges/no-repeats-please

function perm(str) {
	if(str.length === 1) {
		return str;
	}
	var arr = [];
	var newStr = '';
	var perms = [];
    var i, j;
	for(i = str.length - 1; i >= 0; i--) {
		if(i === 0) {
			newStr = str.substr(1);
		} else {
			newStr = str.split('');
			newStr.splice(i, 1);
			newStr = newStr.join('');
		}
		perms = perm(newStr);
		for(j = perms.length - 1; j >= 0; j--) {
			arr.push(str[i] + perms[j]);
		}
	}
	return arr;
}
function permAlone(str) {
	var perms = perm(str);
  if(typeof perms !== 'object') perms = [perms];
	perms = perms.filter(function(cur) {
		return cur.match(/([\w\d])\1+/) === null;
	});
	return perms.length;
}

// Tests
permAlone('aab').should.be.a.Number();
permAlone('aab').should.equal(2);
permAlone('aaa').should.equal(0);
permAlone('aabb').should.equal(8);
permAlone('abcdefa').should.equal(3600);
permAlone('abfdefa').should.equal(2640);
permAlone('zzzzzzzz').should.equal(0);
permAlone('a').should.equal(1);
permAlone('aaab').should.equal(0);
permAlone('aaabb').should.equal(12);
