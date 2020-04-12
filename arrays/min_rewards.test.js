// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  chai.expect(program.minRewards([1])).to.deep.equal(1);
});

it('Test Case #2', function () {
  chai.expect(program.minRewards([5, 10])).to.deep.equal(3);
});

it('Test Case #3', function () {
  chai.expect(program.minRewards([10, 5])).to.deep.equal(3);
});

it('Test Case #4', function () {
  chai.expect(program.minRewards([4, 2, 1, 3])).to.deep.equal(8);
});

it('Test Case #5', function () {
  chai.expect(program.minRewards([0, 4, 2, 1, 3])).to.deep.equal(9);
});

it('Test Case #6', function () {
  chai.expect(program.minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5])).to.deep.equal(25);
});

it('Test Case #7', function () {
  chai.expect(program.minRewards([2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0])).to.deep.equal(52);
});

it('Test Case #8', function () {
  chai.expect(program.minRewards([2, 1, 4, 3, 6, 5, 8, 7, 10, 9])).to.deep.equal(15);
});

it('Test Case #9', function () {
  chai
    .expect(
      program.minRewards([
        800,
        400,
        20,
        10,
        30,
        61,
        70,
        90,
        17,
        21,
        22,
        13,
        12,
        11,
        8,
        4,
        2,
        1,
        3,
        6,
        7,
        9,
        0,
        68,
        55,
        67,
        57,
        60,
        51,
        661,
        50,
        65,
        53,
      ]),
    )
    .to.deep.equal(93);
});