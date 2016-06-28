var should = should || require('should');
// FreeCodeCamp: Record collection
// https://www.freecodecamp.com/challenges/record-collection

var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function update(id, prop, value) {
  if (value !== '' && prop !== 'tracks') {
    collection[id][prop] = value;
  } else if (value !== '') {
    collection[id].tracks = collection[id].tracks || [];
    collection[id].tracks.push(value);
  } else if (value === '') {
    delete collection[id][prop];
  }

  return collection;
}

// Tests
update(5439, "artist", "ABBA");
collection[5439].should.have.property('artist')
  .and.eql('ABBA');
collection = collectionCopy; // reset collection

update(5439, "tracks", "Take a Chance on Me");
collection[5439].should.have.property('tracks')
  .and.have.property(collection[5439].tracks.length - 1, 'Take a Chance on Me');
collection = collectionCopy;

update(2548, "artist", "");
collection[2548].should.not.have.property('artist');
collection = collectionCopy;

update(1245, "tracks", "Addicted to Love");
collection[1245].should.have.property('tracks')
  .and.have.property(collection[1245].tracks.length - 1, 'Addicted to Love');
collection = collectionCopy;

update(2468, "tracks", "Free");
collection[2468].should.have.property('tracks')
  .and.have.property(0, '1999');
collection = collectionCopy;

update(2548, "tracks", "");
collection[2548].should.not.have.property('tracks');
