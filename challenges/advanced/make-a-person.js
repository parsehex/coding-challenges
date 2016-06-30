var should = should || require('should');
// FreeCodeCamp: Make a Person
// https://www.freecodecamp.com/challenges/make-a-person

var Person = function(firstAndLast) {
	var fullName = firstAndLast;
	var firstName = fullName.split(' ')[0];
	var lastName = fullName.split(' ')[1];
	this.getFirstName = function() {
		return firstName;
	};
	this.getLastName = function() {
		return lastName;
	};
	this.getFullName = function() {
		return fullName;
	};
	this.setFirstName = function(first) {
		firstName = first;
		fullName = first + ' ' + lastName;
	};
	this.setLastName = function(last) {
		lastName = last;
		fullName = firstName + ' ' + last;
	};
	this.setFullName = function(firstAndLast) {
		fullName = firstAndLast;
		firstName = fullName.split(' ')[0];
		lastName = fullName.split(' ')[1];
	};
};

// Tests
var bob = new Person('Bob Ross');
Object.keys(bob).should.have.lengthOf(6);
bob.should.be.an.instanceOf(Person);
should(bob.firstName).be.Undefined();
should(bob.lastName).be.Undefined();
bob.getFirstName().should.eql('Bob');
bob.getLastName().should.eql('Ross');
bob.getFullName().should.eql('Bob Ross');

bob.setFirstName('Haskell');
bob.getFullName().should.eql('Haskell Ross');

bob.setLastName('Curry');
bob.getFullName().should.eql('Haskell Curry');

bob.setFullName('Haskell Curry');
bob.getFullName().should.eql('Haskell Curry');
bob.getFirstName().should.eql('Haskell');
bob.getLastName().should.eql('Curry');
