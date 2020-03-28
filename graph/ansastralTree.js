// Add, edit, or remove tests in this file.
// Treat it as your playground!

// const program = require('./program');
// const chai = require('chai');

class StartAncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

const progAT = StartAncestralTree;

class AncestralTree extends progAT {
  constructor(name) {
    super(name);
  }

  addAsAncestor(descendants) {
    for (const descendant of descendants) {
      descendant.ancestor = this;
    }
  }
}

const ancestralTrees = {};
const ALPHABET = 'ABCDEFGHI'.split('');
for (const letter of ALPHABET) {
  ancestralTrees[letter] = new AncestralTree(letter);
}
ancestralTrees.A.addAsAncestor([
  ancestralTrees.B,
  ancestralTrees.C,
  ancestralTrees.D,
  ancestralTrees.E,
  ancestralTrees.F,
]);

console.log(AncestralTree);
ancestralTrees.B.addAsAncestor([ancestralTrees.G, ancestralTrees.H, ancestralTrees.I]);
ancestralTrees.C.addAsAncestor([ancestralTrees.J]);
ancestralTrees.D.addAsAncestor([ancestralTrees.K, ancestralTrees.L]);
ancestralTrees.F.addAsAncestor([ancestralTrees.M, ancestralTrees.N]);
ancestralTrees.H.addAsAncestor([ancestralTrees.O, ancestralTrees.P, ancestralTrees.Q, ancestralTrees.R]);
ancestralTrees.K.addAsAncestor([ancestralTrees.S]);
ancestralTrees.P.addAsAncestor([ancestralTrees.T, ancestralTrees.U]);
ancestralTrees.R.addAsAncestor([ancestralTrees.V]);
ancestralTrees.V.addAsAncestor([ancestralTrees.W, ancestralTrees.X, ancestralTrees.Y]);
ancestralTrees.X.addAsAncestor([ancestralTrees.Z]);
console.log(ancestralTrees)

it('Test Case #1', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.A, ancestralTrees.B);
  chai.expect(yca).to.deep.equal(ancestralTrees.A);
});

it('Test Case #2', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.B, ancestralTrees.F);
  chai.expect(yca).to.deep.equal(ancestralTrees.A);
});

it('Test Case #3', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.G, ancestralTrees.M);
  chai.expect(yca).to.deep.equal(ancestralTrees.A);
});

it('Test Case #4', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.U, ancestralTrees.S);
  chai.expect(yca).to.deep.equal(ancestralTrees.A);
});

it('Test Case #5', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.Z, ancestralTrees.M);
  chai.expect(yca).to.deep.equal(ancestralTrees.A);
});

it('Test Case #6', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.O, ancestralTrees.I);
  chai.expect(yca).to.deep.equal(ancestralTrees.B);
});

it('Test Case #7', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.T, ancestralTrees.Z);
  chai.expect(yca).to.deep.equal(ancestralTrees.H);
});

it('Test Case #8', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.T, ancestralTrees.V);
  chai.expect(yca).to.deep.equal(ancestralTrees.H);
});

it('Test Case #9', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.T, ancestralTrees.H);
  chai.expect(yca).to.deep.equal(ancestralTrees.H);
});

it('Test Case #10', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.W, ancestralTrees.V);
  chai.expect(yca).to.deep.equal(ancestralTrees.V);
});

it('Test Case #11', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.Z, ancestralTrees.B);
  chai.expect(yca).to.deep.equal(ancestralTrees.B);
});

it('Test Case #12', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.Q, ancestralTrees.W);
  chai.expect(yca).to.deep.equal(ancestralTrees.H);
});

it('Test Case #13', function() {
  const yca = program.getYoungestCommonAncestor(ancestralTrees.A, ancestralTrees.A, ancestralTrees.Z);
  chai.expect(yca).to.deep.equal(ancestralTrees.A);
});
