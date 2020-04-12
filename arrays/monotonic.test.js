// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  const array = [];
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(true);
});

it('Test Case #2', function () {
  const array = [1];
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(true);
});

it('Test Case #3', function () {
  const array = [1, 2];
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(true);
});

it('Test Case #4', function () {
  const array = [2, 1];
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(true);
});

it('Test Case #5', function () {
  const array = [1, 5, 10, 1100, 1101, 1102, 9001];
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(true);
});

it('Test Case #6', function () {
  const array = [-1, -5, -10, -1100, -1101, -1102, -9001];
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(true);
});

it('Test Case #7', function () {
  const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(true);
});

it('Test Case #8', function () {
  const array = [-1, -5, -10, -1100, -900, -1101, -1102, -9001];
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(false);
});

it('Test Case #9', function () {
  const array = [1, 2, 0];
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(false);
});

it('Test Case #10', function () {
  const array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11];
  chai.expect(program.isMonotonic(array)).to.deep.equal(false);
});

it('Test Case #11', function () {
  const array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11];
  chai.expect(program.isMonotonic(array)).to.deep.equal(true);
});

it('Test Case #12', function () {
  const array = [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11];
  chai.expect(program.isMonotonic(array)).to.deep.equal(false);
});

it('Test Case #13', function () {
  const array = [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11];
  chai.expect(program.isMonotonic(array)).to.deep.equal(true);
});

it('Test Case #14', function () {
  const array = [-1, -1, -1, -1, -1, -1, -1, -1];
  chai.expect(program.isMonotonic(array)).to.deep.equal(true);
});
