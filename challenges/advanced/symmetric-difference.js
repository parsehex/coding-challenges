var should = should || require('should');
// FreeCodeCamp: Symmetric Difference
// https://www.freecodecamp.com/challenges/symmetric-difference

// From Steamroller algorithm (../intermediate/steamroller.js)
function steamroller(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArr = newArr.concat(steamroller(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
function removeDuplicate(current, index, array) {
	// Remove duplicates, but leave the last instance of the value
	return index === array.lastIndexOf(current);
}
function removeDuplicates(current, index, array) {
	// If there's a duplicate, remove all instances of that value
	return array.indexOf(current) === array.lastIndexOf(current);
}
function sym(args) {
	var arr1 = arguments[0].filter(removeDuplicate);
	var arr2 = arguments[1].filter(removeDuplicate);
  var allItems = steamroller([arr1, arr2]);
  allItems = allItems.filter(removeDuplicates);
  var newArr;
  for (var i = 2; i < arguments.length; i++) {
  	newArr = arguments[i].filter(removeDuplicate)
  	allItems = steamroller([allItems, newArr]);
		allItems = allItems.filter(removeDuplicates);
  }
  return allItems;
}

// Tests
var asc = function(a, b) {return a - b;}; // sort lowest -> highest
sym([1, 2, 3], [5, 2, 1, 4]).sort(asc)
  .should.eql([3, 4, 5]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).sort(asc)
  .should.eql([1, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).sort(asc)
  .should.eql([1, 4, 5]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).sort(asc)
  .should.eql([2, 3, 4, 6, 7]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).sort(asc)
  .should.eql([1, 2, 4, 5, 6, 7, 8, 9]);
