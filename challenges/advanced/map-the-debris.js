var should = should || require('should');
// FreeCodeCamp: Map The Debris
// https://www.freecodecamp.com/challenges/map-the-debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  var obj;
  for(var i = 0; i < arr.length; i++) {
  	var val =  Math.round((2 * Math.PI) * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));
  	obj = {
  		name: arr[i].name,
  		orbitalPeriod: val
  	};
  	newArr.push(obj);
  }
  return newArr;
}

// Tests
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
  .should.eql([{name: "sputnik", orbitalPeriod: 86400}]);

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
  .should.eql([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);
