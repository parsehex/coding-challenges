var should = should || require('should');
// FreeCodeCamp: Inventory Update
// https://www.freecodecamp.com/challenges/inventory-update

function alphabetical(a, b) {
	return a[1].toLowerCase().charCodeAt(0) - b[1].toLowerCase().charCodeAt(0);
}
function findItem(inventory, item) {
	for(var index = 0; index < inventory.length; index++) {
		if(inventory[index][1] === item)
			return index;
	}
	return false;
}
function updateInventory(inventory, delivery) {
	var tempIndex;
  for(var i = 0; i < delivery.length; i++) {
  	tempIndex = findItem(inventory, delivery[i][1]);
  	if(tempIndex !== false) {
  		inventory[tempIndex][0] += delivery[i][0];
  	} else {
  		inventory.push(delivery[i]);
  	}
  }
  inventory.sort(alphabetical);
  return inventory;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// Tests
updateInventory([
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
], [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
])
  .should.have.lengthOf(6);

updateInventory([
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
], [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
])
  .should.eql([
    [88, "Bowling Ball"],
    [2, "Dirty Sock"],
    [3, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [5, "Microphone"],
    [7, "Toothpaste"]
  ]);

updateInventory([
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
],
[])
  .should.eql([
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ]);

updateInventory([],
[
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
])
  .should.eql([
    [67, "Bowling Ball"],
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [7, "Toothpaste"]
  ]);
updateInventory([
  [0, "Bowling Ball"],
  [0, "Dirty Sock"],
  [0, "Hair Pin"],
  [0, "Microphone"]
], [
  [1, "Hair Pin"],
  [1, "Half-Eaten Apple"],
  [1, "Bowling Ball"],
  [1, "Toothpaste"]
])
  .should.eql([
    [1, "Bowling Ball"],
    [0, "Dirty Sock"],
    [1, "Hair Pin"],
    [1, "Half-Eaten Apple"],
    [0, "Microphone"],
    [1, "Toothpaste"]
  ]);
