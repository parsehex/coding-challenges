var should = should || require('should');
// FreeCodeCamp: DNA Pairing
// https://www.freecodecamp.com/challenges/dna-pairing

function pair(str) {
  var arr = [];
  var pairs = {A:'T',T:'A',C:'G',G:'C'};
  str = str.split('');
  var newArr = [];
  for(var i = 0; i < str.length; i++) {
    newArr = [str[i], pairs[str[i]]];
    arr.push(newArr);
  }
  return arr;
}

// Tests
pair("ATCGA").should.eql([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
pair("TTGAG").should.eql([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
pair("CTCTA").should.eql([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
