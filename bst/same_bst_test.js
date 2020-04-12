// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function() {
  const arrayOne = [1, 2, 3, 4, 5, 6, 7];
  const arrayTwo = [1, 2, 3, 4, 5, 6, 7];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(true);
});

it('Test Case #2', function() {
  const arrayOne = [7, 6, 5, 4, 3, 2, 1];
  const arrayTwo = [7, 6, 5, 4, 3, 2, 1];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(true);
});

it('Test Case #3', function() {
  const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2];
  const arrayTwo = [10, 8, 5, 15, 2, 12, 94, 81];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(true);
});

it('Test Case #4', function() {
  const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2];
  const arrayTwo = [11, 8, 5, 15, 2, 12, 94, 81];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(false);
});

it('Test Case #5', function() {
  const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 8, -1, 8, 2, -34];
  const arrayTwo = [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(true);
});

it('Test Case #6', function() {
  const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, -1, 101, 45, 12, 8, -1, 8, 2, -34];
  const arrayTwo = [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(false);
});

it('Test Case #7', function() {
  const arrayOne = [5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34];
  const arrayTwo = [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(false);
});

it('Test Case #8', function() {
  const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 9, -1, 8, 2, -34];
  const arrayTwo = [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 9, 12, 45, 100];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(false);
});

it('Test Case #9', function() {
  const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8];
  const arrayTwo = [1, 2, 3, 4, 5, 6, 7];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(false);
});

it('Test Case #10', function() {
  const arrayOne = [7, 6, 5, 4, 3, 2, 1];
  const arrayTwo = [7, 6, 5, 4, 3, 2, 1, 0];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(false);
});

it('Test Case #11', function() {
  const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 10];
  const arrayTwo = [10, 8, 5, 15, 2, 10, 12, 94, 81];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(false);
});

it('Test Case #12', function() {
  const arrayOne = [50, 76, 81, 23, 23, 23, 657, 56, 12, -1, 3];
  const arrayTwo = [50, 23, 76, 23, 23, 12, 56, 81, -1, 3, 657];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(true);
});

it('Test Case #13', function() {
  const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11];
  const arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81];
  chai.expect(program.sameBsts(arrayOne, arrayTwo)).to.deep.equal(true);
});
