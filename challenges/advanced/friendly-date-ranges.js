var should = should || require('should');
// FreeCodeCamp: Friendly Date Ranges
// https://www.freecodecamp.com/challenges/friendly-date-ranges

function makeFriendlyDates(arr) {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var niceNums = {
		1: 'st',
		2: 'nd',
		3: 'rd'
	};
	var date1 = new Date(+arr[0].match(/\d+/g)[0], +arr[0].match(/\d+/g)[1] - 1, +arr[0].match(/\d+/g)[2]);
	var date2 = new Date(+arr[1].match(/\d+/g)[0], +arr[1].match(/\d+/g)[1] - 1, +arr[1].match(/\d+/g)[2]);
	var same = arr[0] === arr[1];
	var thisYear = new Date().getFullYear();
	var range = date2.getTime() - date1.getTime();
	range /= 31536000000; // in years
  var str1 = [];
  var str2 = [];
  str1.push(months[date1.getMonth()] + ' ');
  if(date1.getMonth() !== date2.getMonth() || (range <= 1 && date2.getFullYear() !== thisYear)) {
  	str2.push(months[date2.getMonth()] + ' ');
  }
  var day1str = date1.getDate() + '';
  if(niceNums[day1str[day1str.length - 1]] && (date2.getDate() <= 9 || date2.getDate() >= 21)) {
  	str1.push(date1.getDate() + niceNums[day1str[day1str.length - 1]]);
  } else {
  	str1.push(date1.getDate() + 'th');
  }
  var day2str = date2.getDate() + '';
  if(niceNums[day2str[day2str.length - 1]] && (date2.getDate() <= 9 || date2.getDate() >= 21)) {
  	str2.push(date2.getDate() + niceNums[day2str[day2str.length - 1]]);
  } else {
  	str2.push(date2.getDate() + 'th');
  }
  if(date1.getFullYear() !== thisYear || range >= 1) {
  	str1.push(', ' + date1.getFullYear());
  }
  if(range >= 1) {
  	str2.push(', ' + date2.getFullYear());
  }
  if(same) {
  	return [str1.join('')];
  }
  return [str1.join(''), str2.join('')];
}

// Tests
makeFriendlyDates(["2016-07-01", "2016-07-04"])
  .should.eql(["July 1st","4th"]);

makeFriendlyDates(["2016-12-01", "2017-02-03"])
  .should.eql(["December 1st","February 3rd"]);

makeFriendlyDates(["2016-12-01", "2018-02-03"])
  .should.eql(["December 1st, 2016","February 3rd, 2018"]);

makeFriendlyDates(["2017-03-01", "2017-05-05"])
  .should.eql(["March 1st, 2017","May 5th"]);

makeFriendlyDates(["2018-01-13", "2018-01-13"])
  .should.eql(["January 13th, 2018"]);

makeFriendlyDates(["2022-09-05", "2023-09-04"])
  .should.eql(["September 5th, 2022","September 4th"]);

makeFriendlyDates(["2022-09-05", "2023-09-05"])
  .should.eql(["September 5th, 2022","September 5th, 2023"]);
