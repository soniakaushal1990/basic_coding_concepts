// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  chai.expect(program.hasSingleCycle([2, 2, -1])).to.deep.equal(true);
});

it('Test Case #2', function () {
  chai.expect(program.hasSingleCycle([2, 2, 2])).to.deep.equal(true);
});

it('Test Case #3', function () {
  chai.expect(program.hasSingleCycle([1, 1, 1, 1, 1])).to.deep.equal(true);
});

it('Test Case #4', function () {
  chai.expect(program.hasSingleCycle([-1, 2, 2])).to.deep.equal(true);
});

it('Test Case #5', function () {
  chai.expect(program.hasSingleCycle([0, 1, 1, 1, 1])).to.deep.equal(false);
});

it('Test Case #6', function () {
  chai.expect(program.hasSingleCycle([1, 1, 0, 1, 1])).to.deep.equal(false);
});

it('Test Case #7', function () {
  chai.expect(program.hasSingleCycle([1, 1, 1, 1, 2])).to.deep.equal(false);
});

it('Test Case #8', function () {
  chai.expect(program.hasSingleCycle([3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2])).to.deep.equal(true);
});

it('Test Case #9', function () {
  chai.expect(program.hasSingleCycle([3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2])).to.deep.equal(false);
});

it('Test Case #10', function () {
  chai.expect(program.hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, 1])).to.deep.equal(true);
});

it('Test Case #11', function () {
  chai.expect(program.hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -8])).to.deep.equal(true);
});

it('Test Case #12', function () {
  chai.expect(program.hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26])).to.deep.equal(true);
});

it('Test Case #13', function () {
  chai.expect(program.hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26])).to.deep.equal(true);
});

it('Test Case #14', function () {
  chai.expect(program.hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 909, -26])).to.deep.equal(false);
});

it('Test Case #15', function () {
  chai.expect(program.hasSingleCycle([2, 3, 1, -4, -4, 2])).to.deep.equal(true);
});

it('Test Case #16', function () {
  chai.expect(program.hasSingleCycle([1, -1, 1, -1])).to.deep.equal(false);
});