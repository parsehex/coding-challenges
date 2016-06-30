var should = should || require('should');
// FreeCodeCamp: Roman Numeral Converter
// https://www.freecodecamp.com/challenges/roman-numeral-converter

function convertToRoman(num) {
  var result = '';
  var nums = [1, 4, 5, 6, 7, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var vals = ['I', 'IV', 'V', 'VI', 'VII', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  for(var numLeft = num; numLeft > 0;) {
    for(var i = nums.length; i >= 0;) {
    	while(numLeft / nums[i] >= 1) {
    		result += vals[i];
    		numLeft -= nums[i];
    	}
    	i--;
    }
  }
  return result;
}

// Tests
convertToRoman(2).should.eql('II');
convertToRoman(3).should.eql('III');
convertToRoman(4).should.eql('IV');
convertToRoman(5).should.eql('V');
convertToRoman(9).should.eql('IX');
convertToRoman(12).should.eql('XII');
convertToRoman(16).should.eql('XVI');
convertToRoman(29).should.eql('XXIX');
convertToRoman(44).should.eql('XLIV');
convertToRoman(45).should.eql('XLV');
convertToRoman(68).should.eql('LXVIII');
convertToRoman(83).should.eql('LXXXIII');
convertToRoman(97).should.eql('XCVII');
convertToRoman(99).should.eql('XCIX');
convertToRoman(500).should.eql('D');
convertToRoman(501).should.eql('DI');
convertToRoman(649).should.eql('DCXLIX');
convertToRoman(798).should.eql('DCCXCVIII');
convertToRoman(891).should.eql('DCCCXCI');
convertToRoman(1000).should.eql('M');
convertToRoman(1004).should.eql('MIV');
convertToRoman(1006).should.eql('MVI');
convertToRoman(1023).should.eql('MXXIII');
convertToRoman(2014).should.eql('MMXIV');
convertToRoman(3999).should.eql('MMMCMXCIX');
