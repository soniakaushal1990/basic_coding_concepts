// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function() {
  chai.expect(program.searchForRange([5, 7, 7, 8, 8, 10], 5)).to.deep.equal([0, 0]);
});

it('Test Case #2', function() {
  chai.expect(program.searchForRange([5, 7, 7, 8, 8, 10], 7)).to.deep.equal([1, 2]);
});

it('Test Case #3', function() {
  chai.expect(program.searchForRange([5, 7, 7, 8, 8, 10], 8)).to.deep.equal([3, 4]);
});

it('Test Case #4', function() {
  chai.expect(program.searchForRange([5, 7, 7, 8, 8, 10], 10)).to.deep.equal([5, 5]);
});

it('Test Case #5', function() {
  chai.expect(program.searchForRange([5, 7, 7, 8, 8, 10], 9)).to.deep.equal([-1, -1]);
});

it('Test Case #6', function() {
  chai.expect(program.searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 47)).to.deep.equal([-1, -1]);
});

it('Test Case #7', function() {
  chai.expect(program.searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], -1)).to.deep.equal([-1, -1]);
});

it('Test Case #8', function() {
  chai.expect(program.searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45)).to.deep.equal([4, 9]);
});

it('Test Case #9', function() {
  chai.expect(program.searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 45, 45, 45], 45)).to.deep.equal([4, 12]);
});