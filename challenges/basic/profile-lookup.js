var should = should || require('should');
// FreeCodeCamp: Profile lookUp
// https://www.freecodecamp.com/challenges/profile-lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUp(firstName, prop){
  for (var i = 0; i < contacts.length; i++ ) {
    if (contacts[i].firstName === firstName) {
      return contacts[i].hasOwnProperty(prop) ? contacts[i][prop] : 'No such property';
    }
  }
  return 'No such contact';
}

// Tests
lookUp("Kristian", "lastName").should.equal('Vos');

lookUp("Sherlock", "likes").should.eql(["Intriguing Cases", "Violin"]);

lookUp("Harry", "likes").should.be.an.Array();

lookUp("Bob", "number").should.equal('No such contact');

lookUp("Akira", "address").should.equal('No such property');
