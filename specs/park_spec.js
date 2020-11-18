const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 100, []);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino('T-Rex', 'carnivore', 50);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino('T-Rex', 'carnivore', 50);
    park.removeDino('T-Rex', 'carnivore', 50);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino('T-Rex', 'Carnivore', 50);
    park.addDino('Velociraptor', 'Carnivore', 80);
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, 'Velociraptor');
  });

  xit('should be able to find all dinosaurs of a particular species');
    // Will be similar to above, but can't work it out.
  it('should be able to calculate the total number of visitors per day', function() {
    park.addDino('T-Rex', 'Carnivore', 50);
    park.addDino('Velociraptor', 'Carnivore', 80);
    const actual = park.dailyVisitors();
    assert.deepStrictEqual(actual, 130);
  });

  xit('should be able to calculate the total number of visitors per year');
    // Will be above function * 365.
  xit('should be able to calculate total revenue for one year');
    // Will be above function multiplied by park.ticketPrice.
});
