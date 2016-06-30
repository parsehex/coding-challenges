var should = should || require('should');
// FreeCodeCamp: Binary Agents
// https://www.freecodecamp.com/challenges/binary-agents

function convertBinaryByte(byte) {
  var binaryPlaces = [128, 64, 32, 16, 8, 4, 2, 1];
  var byteArr = byte.split('');
  byteArr = byteArr.map(function(cur) {
    return parseInt(cur);
  });
  var bits = [];
  var result = null;
  for(var i = 0; i < byteArr.length; i++) {
   bits.push(byteArr[i] === 1 ? binaryPlaces[i] : 0);
  }
  result = bits.reduce(function(a, b) {
    return a + b;
  });
  return result;
}
function binaryAgent(str) {
  var bytes = str.split(' ');
  var result = '';
  bytes.forEach(function(cur) {
    result += String.fromCharCode(convertBinaryByte(cur));
  });
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 " +
  "00100111 01110100 00100000 01100010 01101111 " +
  "01101110 01100110 01101001 01110010 01100101 " +
  "01110011 00100000 01100110 01110101 01101110 " +
  "00100001 00111111")
    .should.eql("Aren't bonfires fun!?");
binaryAgent("01001001 00100000 01101100 01101111 " +
  "01110110 01100101 00100000 01000110 01110010 " +
  "01100101 01100101 01000011 01101111 01100100 " +
  "01100101 01000011 01100001 01101101 01110000 " +
  "00100001")
    .should.eql("I love FreeCodeCamp!");
