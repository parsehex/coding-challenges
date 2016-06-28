var should = should || require('should');
// FreeCodeCamp: Confirm the Ending
// https://www.freecodecamp.com/challenges/confirm-the-ending

function end(str, target) {
  return target === str.substring(str.length-target.length);
}

// Tests
end("Bastian", "n")
  .should.be.true();
end("Connor", "n")
  .should.be.false();
end("Walking on water and developing software from a specification are easy if both are frozen", "specification")
  .should.be.false();
end("He has to give me a new name", "name")
  .should.be.true();
end("He has to give me a new name", "me")
  .should.be.true();
end("He has to give me a new name", "na")
  .should.be.false();
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")
  .should.be.false();
