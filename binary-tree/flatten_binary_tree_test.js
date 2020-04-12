// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function() {
  const root = new BinaryTree(1);
  const leftMostNode = program.flattenBinaryTree(root);
  const leftToRightToLeft = leftMostNode.leftToRightToLeft();
  const expected = [1, 1];
  chai.expect(leftToRightToLeft).to.deep.equal(expected);
});

it('Test Case #2', function() {
  const root = new BinaryTree(1).insert([2]);
  const leftMostNode = program.flattenBinaryTree(root);
  const leftToRightToLeft = leftMostNode.leftToRightToLeft();
  const expected = [2, 1, 1, 2];
  chai.expect(leftToRightToLeft).to.deep.equal(expected);
});

it('Test Case #3', function() {
  const root = new BinaryTree(1).insert([2, 3]);
  const leftMostNode = program.flattenBinaryTree(root);
  const leftToRightToLeft = leftMostNode.leftToRightToLeft();
  const expected = [2, 1, 3, 3, 1, 2];
  chai.expect(leftToRightToLeft).to.deep.equal(expected);
});

it('Test Case #4', function() {
  const root = new BinaryTree(1).insert([2, 3, 4]);
  const leftMostNode = program.flattenBinaryTree(root);
  const leftToRightToLeft = leftMostNode.leftToRightToLeft();
  const expected = [4, 2, 1, 3, 3, 1, 2, 4];
  chai.expect(leftToRightToLeft).to.deep.equal(expected);
});

it('Test Case #5', function() {
  const root = new BinaryTree(1).insert([2, 3, 4, 5]);
  const leftMostNode = program.flattenBinaryTree(root);
  const leftToRightToLeft = leftMostNode.leftToRightToLeft();
  const expected = [4, 2, 5, 1, 3, 3, 1, 5, 2, 4];
  chai.expect(leftToRightToLeft).to.deep.equal(expected);
});

it('Test Case #6', function() {
  const root = new BinaryTree(1).insert([2, 3, 4, 5, 6]);
  const leftMostNode = program.flattenBinaryTree(root);
  const leftToRightToLeft = leftMostNode.leftToRightToLeft();
  const expected = [4, 2, 5, 1, 6, 3, 3, 6, 1, 5, 2, 4];
  chai.expect(leftToRightToLeft).to.deep.equal(expected);
});

it('Test Case #7', function() {
  const root = new BinaryTree(1).insert([2, 3, 4, 5, 6]);
  root.left.right.left = new BinaryTree(7);
  root.left.right.right = new BinaryTree(8);
  const leftMostNode = program.flattenBinaryTree(root);
  const leftToRightToLeft = leftMostNode.leftToRightToLeft();
  const expected = [4, 2, 7, 5, 8, 1, 6, 3, 3, 6, 1, 8, 5, 7, 2, 4];
  chai.expect(leftToRightToLeft).to.deep.equal(expected);
});

it('Test Case #8', function() {
  const root = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const leftMostNode = program.flattenBinaryTree(root);
  const leftToRightToLeft = leftMostNode.leftToRightToLeft();
  const expected = [8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 3, 7, 7, 3, 6, 12, 1, 11, 5, 10, 2, 9, 4, 8];
  chai.expect(leftToRightToLeft).to.deep.equal(expected);
});

