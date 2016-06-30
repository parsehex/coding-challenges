var should = should || require('should');
// FreeCodeCamp: Exact Change
// https://www.freecodecamp.com/challenges/exact-change

// These two functions are to help with floating point precission errors
function add(a, b) {
	return +((a * 10 + b * 10) / 10).toFixed(2);
}
function subtract(a, b) {
	return +((a * 10 - b * 10) / 10).toFixed(2);
}

function checkCashRegister(price, cash, cid) {
  var coinAmounts = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  var totalChange = subtract(cash, price);
  var totalCid = 0;
  var i;

  for(i = 0; i < cid.length; i++) {
  	totalCid = add(totalCid, cid[i][1]);
  }
  if(totalCid === totalChange)
  	return 'Closed';

  var change = [['PENNY',0],['NICKEL',0],['DIME',0],['QUARTER',0],['ONE',0],['FIVE',0],['TEN',0],['TWENTY',0],['ONE HUNDRED',0]];
  for(i = cid.length - 1; i >= 0;) {
  	if(cid[i][1] > 0 && totalChange >= coinAmounts[i]) {
  		totalChange = subtract(totalChange, coinAmounts[i]);
  		cid[i][1] = subtract(cid[i][1], coinAmounts[i]);
  		change[i][1] = add(change[i][1], coinAmounts[i]);
  	}
  	if(totalChange < coinAmounts[i] || cid[i][1] === 0)
  		i--;
  }
  var finalChange = [];
  for(i = change.length - 1; i >= 0; i--) {
  	if(change[i][1] === 0)
  		continue;

  	finalChange.push(change[i]);
  }
  return totalChange > 0 ? 'Insufficient Funds' : finalChange;
}

// Tests
checkCashRegister(19.50, 20.00,
  [["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]])
  .should.be.an.Array();

checkCashRegister(19.50, 20.00,
  [["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]])
  .should.be.a.String();

checkCashRegister(19.50, 20.00,
  [["PENNY", 0.50],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]])
  .should.be.a.String();

checkCashRegister(19.50, 20.00,
  [["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]])
  .should.be.eql([["QUARTER", 0.50]]);

checkCashRegister(3.26, 100.00,
  [["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]])
  .should.be.eql([["TWENTY", 60.00],
    ["TEN", 20.00],
    ["FIVE", 15.00],
    ["ONE", 1.00],
    ["QUARTER", 0.50],
    ["DIME", 0.20],
    ["PENNY", 0.04]]);

checkCashRegister(19.50, 20.00,
  [["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]])
  .should.be.eql("Insufficient Funds");

checkCashRegister(19.50, 20.00,
  [["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1.00],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]])
  .should.be.eql("Insufficient Funds");

checkCashRegister(19.50, 20.00,
  [["PENNY", 0.50],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]])
  .should.be.eql("Closed");
