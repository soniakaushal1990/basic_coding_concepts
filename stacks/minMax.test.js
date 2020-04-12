// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

function testMinMaxPeek(min, max, peek, stack) {
  chai.expect(stack.getMin()).to.deep.equal(min);
  chai.expect(stack.getMax()).to.deep.equal(max);
  chai.expect(stack.peek()).to.deep.equal(peek);
}

it('Test Case #1', function() {
  const stack = new program.MinMaxStack();
  stack.push(2);
  testMinMaxPeek(2, 2, 2, stack);
  stack.push(7);
  testMinMaxPeek(2, 7, 7, stack);
  stack.push(1);
  testMinMaxPeek(1, 7, 1, stack);
  stack.push(8);
  testMinMaxPeek(1, 8, 8, stack);
  stack.push(3);
  testMinMaxPeek(1, 8, 3, stack);
  stack.push(9);
  testMinMaxPeek(1, 9, 9, stack);
  chai.expect(stack.pop()).to.deep.equal(9);
  testMinMaxPeek(1, 8, 3, stack);
  chai.expect(stack.pop()).to.deep.equal(3);
  testMinMaxPeek(1, 8, 8, stack);
  chai.expect(stack.pop()).to.deep.equal(8);
  testMinMaxPeek(1, 7, 1, stack);
  chai.expect(stack.pop()).to.deep.equal(1);
  testMinMaxPeek(2, 7, 7, stack);
  chai.expect(stack.pop()).to.deep.equal(7);
  testMinMaxPeek(2, 2, 2, stack);
  chai.expect(stack.pop()).to.deep.equal(2);
});

it('Test Case #2', function() {
  const stack = new program.MinMaxStack();
  stack.push(5);
  testMinMaxPeek(5, 5, 5, stack);
  stack.push(5);
  testMinMaxPeek(5, 5, 5, stack);
  stack.push(5);
  testMinMaxPeek(5, 5, 5, stack);
  stack.push(5);
  testMinMaxPeek(5, 5, 5, stack);
  stack.push(8);
  testMinMaxPeek(5, 8, 8, stack);
  stack.push(8);
  testMinMaxPeek(5, 8, 8, stack);
  stack.push(0);
  testMinMaxPeek(0, 8, 0, stack);
  stack.push(8);
  testMinMaxPeek(0, 8, 8, stack);
  stack.push(9);
  testMinMaxPeek(0, 9, 9, stack);
  stack.push(5);
  testMinMaxPeek(0, 9, 5, stack);
  chai.expect(stack.pop()).to.deep.equal(5);
  testMinMaxPeek(0, 9, 9, stack);
  chai.expect(stack.pop()).to.deep.equal(9);
  testMinMaxPeek(0, 8, 8, stack);
  chai.expect(stack.pop()).to.deep.equal(8);
  testMinMaxPeek(0, 8, 0, stack);
  chai.expect(stack.pop()).to.deep.equal(0);
  testMinMaxPeek(5, 8, 8, stack);
  chai.expect(stack.pop()).to.deep.equal(8);
  testMinMaxPeek(5, 8, 8, stack);
  chai.expect(stack.pop()).to.deep.equal(8);
  testMinMaxPeek(5, 5, 5, stack);
  chai.expect(stack.pop()).to.deep.equal(5);
  testMinMaxPeek(5, 5, 5, stack);
  chai.expect(stack.pop()).to.deep.equal(5);
  testMinMaxPeek(5, 5, 5, stack);
  chai.expect(stack.pop()).to.deep.equal(5);
  testMinMaxPeek(5, 5, 5, stack);
  chai.expect(stack.pop()).to.deep.equal(5);
});

it('Test Case #3', function() {
  const stack = new program.MinMaxStack();
  stack.push(2);
  testMinMaxPeek(2, 2, 2, stack);
  stack.push(0);
  testMinMaxPeek(0, 2, 0, stack);
  stack.push(5);
  testMinMaxPeek(0, 5, 5, stack);
  stack.push(4);
  testMinMaxPeek(0, 5, 4, stack);
  chai.expect(stack.pop()).to.deep.equal(4);
  testMinMaxPeek(0, 5, 5, stack);
  chai.expect(stack.pop()).to.deep.equal(5);
  testMinMaxPeek(0, 2, 0, stack);
  stack.push(4);
  testMinMaxPeek(0, 4, 4, stack);
  stack.push(11);
  testMinMaxPeek(0, 11, 11, stack);
  stack.push(-11);
  testMinMaxPeek(-11, 11, -11, stack);
  chai.expect(stack.pop()).to.deep.equal(-11);
  testMinMaxPeek(0, 11, 11, stack);
  chai.expect(stack.pop()).to.deep.equal(11);
  testMinMaxPeek(0, 4, 4, stack);
  chai.expect(stack.pop()).to.deep.equal(4);
  testMinMaxPeek(0, 2, 0, stack);
  chai.expect(stack.pop()).to.deep.equal(0);
  testMinMaxPeek(2, 2, 2, stack);
  chai.expect(stack.pop()).to.deep.equal(2);
  stack.push(6);
  testMinMaxPeek(6, 6, 6, stack);
  chai.expect(stack.pop()).to.deep.equal(6);
});
