// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  const perms = program.getPermutations([]);
  chai.expect(perms.length).to.deep.equal(0);
});

it('Test Case #2', function () {
  const perms = program.getPermutations([1]);
  chai.expect(perms.length).to.deep.equal(1);
  chai.expect(perms).to.deep.include([1]);
});

it('Test Case #3', function () {
  const perms = program.getPermutations([1, 2]);
  chai.expect(perms.length).to.deep.equal(2);
  chai.expect(perms).to.deep.include([1, 2]);
  chai.expect(perms).to.deep.include([2, 1]);
});

it('Test Case #4', function () {
  const perms = program.getPermutations([1, 2, 3]);
  chai.expect(perms.length).to.deep.equal(6);
  chai.expect(perms).to.deep.include([1, 2, 3]);
  chai.expect(perms).to.deep.include([1, 3, 2]);
  chai.expect(perms).to.deep.include([2, 1, 3]);
  chai.expect(perms).to.deep.include([2, 3, 1]);
  chai.expect(perms).to.deep.include([3, 1, 2]);
  chai.expect(perms).to.deep.include([3, 2, 1]);
});

it('Test Case #5', function () {
  const perms = program.getPermutations([1, 2, 3, 4]);
  chai.expect(perms.length).to.deep.equal(24);
  chai.expect(perms).to.deep.include([1, 2, 3, 4]);
  chai.expect(perms).to.deep.include([1, 2, 4, 3]);
  chai.expect(perms).to.deep.include([1, 3, 2, 4]);
  chai.expect(perms).to.deep.include([1, 3, 4, 2]);
  chai.expect(perms).to.deep.include([1, 4, 3, 2]);
  chai.expect(perms).to.deep.include([1, 4, 2, 3]);
  chai.expect(perms).to.deep.include([2, 1, 3, 4]);
  chai.expect(perms).to.deep.include([2, 1, 4, 3]);
  chai.expect(perms).to.deep.include([2, 3, 1, 4]);
  chai.expect(perms).to.deep.include([2, 3, 4, 1]);
  chai.expect(perms).to.deep.include([2, 4, 1, 3]);
  chai.expect(perms).to.deep.include([2, 4, 3, 1]);
  chai.expect(perms).to.deep.include([3, 1, 2, 4]);
  chai.expect(perms).to.deep.include([3, 1, 4, 2]);
  chai.expect(perms).to.deep.include([3, 2, 1, 4]);
  chai.expect(perms).to.deep.include([3, 2, 4, 1]);
  chai.expect(perms).to.deep.include([3, 4, 1, 2]);
  chai.expect(perms).to.deep.include([3, 4, 2, 1]);
  chai.expect(perms).to.deep.include([4, 1, 2, 3]);
  chai.expect(perms).to.deep.include([4, 1, 3, 2]);
  chai.expect(perms).to.deep.include([4, 2, 1, 3]);
  chai.expect(perms).to.deep.include([4, 2, 3, 1]);
  chai.expect(perms).to.deep.include([4, 3, 1, 2]);
  chai.expect(perms).to.deep.include([4, 3, 2, 1]);
});
